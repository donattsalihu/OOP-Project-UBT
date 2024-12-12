
        exports.up = function(knex) {
          return knex.schema.createTable("roles", function(table) {
            table.timestamp("created_at").defaultTo("CURRENT_TIMESTAMP");
    table.varchar("description").notNullable();
    table.char("id").primary().notNullable();
    table.int("key").notNullable();
    table.varchar("name").notNullable();
    table.timestamp("updated_at").defaultTo("CURRENT_TIMESTAMP");
          });
        };

        exports.down = function(knex) {
          return knex.schema.dropTable("roles");
        };
      