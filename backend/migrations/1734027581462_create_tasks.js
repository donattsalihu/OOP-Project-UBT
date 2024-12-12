
        exports.up = function(knex) {
          return knex.schema.createTable("tasks", function(table) {
            table.char("assigned_to").notNullable();
    table.timestamp("created_at").defaultTo("CURRENT_TIMESTAMP");
    table.text("description");
    table.timestamp("due_date");
    table.char("id").primary().notNullable();
    table.varchar("status").defaultTo("pending");
    table.varchar("title").notNullable();
    table.timestamp("updated_at").defaultTo("CURRENT_TIMESTAMP");
          });
        };

        exports.down = function(knex) {
          return knex.schema.dropTable("tasks");
        };
      