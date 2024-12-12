
        exports.up = function(knex) {
          return knex.schema.createTable("audit_logs", function(table) {
            table.varchar("action").notNullable();
    table.char("entity_id");
    table.varchar("entity_type");
    table.char("id").primary().notNullable();
    table.timestamp("timestamp").defaultTo("CURRENT_TIMESTAMP");
    table.char("user_id").notNullable();
          });
        };

        exports.down = function(knex) {
          return knex.schema.dropTable("audit_logs");
        };
      