
        exports.up = function(knex) {
          return knex.schema.createTable("project_members", function(table) {
            table.char("id").primary().notNullable();
    table.timestamp("joined_at").defaultTo("CURRENT_TIMESTAMP");
    table.char("member_id").notNullable();
    table.char("project_id").notNullable();
    table.varchar("role").notNullable();
          });
        };

        exports.down = function(knex) {
          return knex.schema.dropTable("project_members");
        };
      