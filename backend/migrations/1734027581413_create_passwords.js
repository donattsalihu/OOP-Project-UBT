
        exports.up = function(knex) {
          return knex.schema.createTable("passwords", function(table) {
            table.timestamp("created_at").defaultTo("CURRENT_TIMESTAMP");
    table.char("id").primary().notNullable();
    table.varchar("password_hash").notNullable();
    table.timestamp("updated_at").defaultTo("CURRENT_TIMESTAMP");
    table.char("user_id").notNullable();
          });
        };

        exports.down = function(knex) {
          return knex.schema.dropTable("passwords");
        };
      