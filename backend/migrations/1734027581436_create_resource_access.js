
        exports.up = function(knex) {
          return knex.schema.createTable("resource_access", function(table) {
            table.varchar("access_level").notNullable();
    table.timestamp("created_at").defaultTo("CURRENT_TIMESTAMP");
    table.char("id").primary().notNullable();
    table.varchar("resource_name").notNullable();
    table.char("role_id").notNullable();
          });
        };

        exports.down = function(knex) {
          return knex.schema.dropTable("resource_access");
        };
      