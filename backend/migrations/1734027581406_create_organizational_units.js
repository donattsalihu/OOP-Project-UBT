
        exports.up = function(knex) {
          return knex.schema.createTable("organizational_units", function(table) {
            table.char("company_id").notNullable();
    table.timestamp("created_at").defaultTo("CURRENT_TIMESTAMP");
    table.char("id").primary().notNullable();
    table.varchar("name").notNullable();
    table.char("parent_unit_id");
    table.timestamp("updated_at").defaultTo("CURRENT_TIMESTAMP");
          });
        };

        exports.down = function(knex) {
          return knex.schema.dropTable("organizational_units");
        };
      