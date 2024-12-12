
        exports.up = function(knex) {
          return knex.schema.createTable("projects", function(table) {
            table.timestamp("created_at").defaultTo("CURRENT_TIMESTAMP");
    table.text("description");
    table.char("id").primary().notNullable();
    table.varchar("name").notNullable();
    table.char("owner_id").notNullable();
    table.timestamp("updated_at").defaultTo("CURRENT_TIMESTAMP");
          });
        };

        exports.down = function(knex) {
          return knex.schema.dropTable("projects");
        };
      