
        exports.up = function(knex) {
          return knex.schema.createTable("notifications", function(table) {
            table.timestamp("created_at").defaultTo("CURRENT_TIMESTAMP");
    table.char("id").primary().notNullable();
    table.boolean("is_read").defaultTo("0");
    table.varchar("message").notNullable();
    table.char("user_id").notNullable();
          });
        };

        exports.down = function(knex) {
          return knex.schema.dropTable("notifications");
        };
      