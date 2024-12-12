
        exports.up = function(knex) {
          return knex.schema.createTable("users", function(table) {
            table.timestamp("created_at").defaultTo("CURRENT_TIMESTAMP");
    table.varchar("email").notNullable();
    table.char("id").primary().notNullable();
    table.varchar("password_hash").notNullable();
    table.char("role_id").notNullable();
    table.timestamp("updated_at").defaultTo("CURRENT_TIMESTAMP");
    table.varchar("username").notNullable();
          });
        };

        exports.down = function(knex) {
          return knex.schema.dropTable("users");
        };
      