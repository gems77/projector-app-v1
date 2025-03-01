exports.up = function(knex) {
    return knex.schema.createTable('reservations', (table) => {
      table.increments('id').primary();
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
      table.integer('projector_id').unsigned().references('id').inTable('projectors').onDelete('CASCADE');
      table.timestamp('reserved_at').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('reservations');
  };
  