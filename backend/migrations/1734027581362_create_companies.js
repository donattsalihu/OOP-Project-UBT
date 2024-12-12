
        exports.up = function(knex) {
          return knex.schema.createTable("companies", function(table) {
            table.varchar("company_name").notNullable();
    table.char("company_type_id").notNullable();
    table.timestamp("created_at").defaultTo("CURRENT_TIMESTAMP");
    table.varchar("email").notNullable();
    table.varchar("first_name").notNullable();
    table.char("id").primary().notNullable();
    table.varchar("last_name").notNullable();
    table.varchar("title").notNullable();
    table.timestamp("updated_at").defaultTo("CURRENT_TIMESTAMP");
          });
        };

        exports.down = function(knex) {
          return knex.schema.dropTable("companies");
        };
      