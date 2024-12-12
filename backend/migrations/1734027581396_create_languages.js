
        exports.up = function(knex) {
          return knex.schema.createTable("languages", function(table) {
            table.timestamp("created_at").defaultTo("CURRENT_TIMESTAMP");
    table.char("id").primary().notNullable();
    table.varchar("iso_code").notNullable();
    table.varchar("name").notNullable();
    table.timestamp("updated_at").defaultTo("CURRENT_TIMESTAMP");
          });
        };

        exports.down = function(knex) {
          return knex.schema.dropTable("languages");
        };
      