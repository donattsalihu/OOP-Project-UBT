
        exports.up = function(knex) {
          return knex.schema.createTable("knex_migrations", function(table) {
            table.int("batch");
            table.integer("id").unsigned().primary().notNullable();
    table.timestamp("migration_time");
    table.varchar("name");
          });
        };

        exports.down = function(knex) {
          return knex.schema.dropTable("knex_migrations");
        };
      