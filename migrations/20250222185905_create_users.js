exports.up = function(knex) {
    return knex.schema.createTable('users', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('email').unique().notNullable();
      table.string('password').notNullable();
      table.enum('role', ['admin', 'student', 'teacher']).defaultTo('student');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('users');
  };
  