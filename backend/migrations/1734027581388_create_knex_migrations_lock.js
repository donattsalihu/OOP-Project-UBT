
        exports.up = function(knex) {
          return knex.schema.createTable("knex_migrations_lock", function(table) {
            table.int unsigned("index").primary().notNullable();
    table.int("is_locked");
          });
        };

        exports.down = function(knex) {
          return knex.schema.dropTable("knex_migrations_lock");
        };
      