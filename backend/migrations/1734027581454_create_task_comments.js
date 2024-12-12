
        exports.up = function(knex) {
          return knex.schema.createTable("task_comments", function(table) {
            table.text("comment").notNullable();
    table.char("commenter_id").notNullable();
    table.timestamp("created_at").defaultTo("CURRENT_TIMESTAMP");
    table.char("id").primary().notNullable();
    table.char("task_id").notNullable();
          });
        };

        exports.down = function(knex) {
          return knex.schema.dropTable("task_comments");
        };
      