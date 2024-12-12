
        exports.up = function(knex) {
          return knex.schema.createTable("user_organizational_units", function(table) {
            table.timestamp("created_at").defaultTo("CURRENT_TIMESTAMP");
    table.char("id").primary().notNullable();
    table.char("organizational_unit_id").notNullable();
    table.timestamp("updated_at").defaultTo("CURRENT_TIMESTAMP");
    table.char("user_id").notNullable();
          });
        };

        exports.down = function(knex) {
          return knex.schema.dropTable("user_organizational_units");
        };
      