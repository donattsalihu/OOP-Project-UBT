const knex = require("knex");
const SchemaInspector = require("knex-schema-inspector").default;
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const db = knex({
  client: "mysql2",
  connection: {
    host: process.env.DB_HOSTNAME,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

const generateMigrations = async () => {
  try {
    console.log("Connecting to database...");
    const inspector = SchemaInspector(db);
    const tables = await inspector.tables();

    if (tables.length === 0) {
      console.log("No tables found in the database.");
      return;
    }

    for (const table of tables) {
      console.log(`Processing table: ${table}`);
      const schema = await inspector.columnInfo(table); // Fetch column details

      if (!schema || schema.length === 0) {
        console.log(`No columns found for table: ${table}`);
        continue;
      }

      const timestamp = new Date().getTime();
      const migrationFile = `migrations/${timestamp}_create_${table}.js`;

      const columns = schema.map((col) => {
        let columnDef = `table.${col.data_type}("${col.name}")`;
        if (col.is_primary_key) columnDef += ".primary()";
        if (!col.is_nullable) columnDef += ".notNullable()";
        if (col.default_value !== null) columnDef += `.defaultTo(${JSON.stringify(col.default_value)})`;
        return columnDef + ";";
      });

      const migrationContent = `
        exports.up = function(knex) {
          return knex.schema.createTable("${table}", function(table) {
            ${columns.join("\n    ")}
          });
        };

        exports.down = function(knex) {
          return knex.schema.dropTable("${table}");
        };
      `;

      fs.writeFileSync(path.join(__dirname, migrationFile), migrationContent);
      console.log(`Migration for table ${table} created: ${migrationFile}`);
    }
  } catch (err) {
    console.error("Error generating migrations:", err.message);
  } finally {
    db.destroy();
  }
};

generateMigrations();
