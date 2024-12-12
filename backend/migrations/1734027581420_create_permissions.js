
        exports.up = function(knex) {
          return knex.schema.createTable("permissions", function(table) {
            table.timestamp("created_at").defaultTo("CURRENT_TIMESTAMP");
    table.varchar("description");
    table.char("id").primary().notNullable();
    table.varchar("permission_key").notNullable();
    table.char("role_id").notNullable();
          });
        };

        exports.down = function(knex) {
          return knex.schema.dropTable("permissions");
        };
      