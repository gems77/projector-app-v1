exports.up = function(knex) {
    return knex.schema.createTable('projectors', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.boolean('is_available').defaultTo(true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('projectors');
  };
  