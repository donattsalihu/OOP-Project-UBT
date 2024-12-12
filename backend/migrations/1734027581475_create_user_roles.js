
        exports.up = function(knex) {
          return knex.schema.createTable("user_roles", function(table) {
            table.timestamp("assigned_at").defaultTo("CURRENT_TIMESTAMP");
    table.char("id").primary().notNullable();
    table.char("role_id").notNullable();
    table.char("user_id").notNullable();
          });
        };

        exports.down = function(knex) {
          return knex.schema.dropTable("user_roles");
        };
      