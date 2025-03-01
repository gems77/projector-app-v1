const knex = require('knex')(require('../knexfile').development);

const getUserByEmail = (email) => knex('users').where({ email }).first();

const createUser = (user) => knex('users').insert(user);

module.exports = { getUserByEmail, createUser };
