
        exports.up = function(knex) {
          return knex.schema.createTable("company_organizational_units", function(table) {
            table.char("company_id").notNullable();
    table.timestamp("created_at").defaultTo("CURRENT_TIMESTAMP");
    table.char("id").primary().notNullable();
    table.char("organizational_unit_id").notNullable();
    table.timestamp("updated_at").defaultTo("CURRENT_TIMESTAMP");
          });
        };

        exports.down = function(knex) {
          return knex.schema.dropTable("company_organizational_units");
        };
      