
        exports.up = function(knex) {
          return knex.schema.createTable("sessions", function(table) {
            table.timestamp("created_at").defaultTo("CURRENT_TIMESTAMP");
    table.timestamp("expires_at").notNullable();
    table.char("id").primary().notNullable();
    table.varchar("session_token").notNullable();
    table.char("user_id").notNullable();
          });
        };

        exports.down = function(knex) {
          return knex.schema.dropTable("sessions");
        };
      