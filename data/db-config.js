const knex = require('knex');
const knexfile = require('../knexfile');

module.exports = knex(knex.knexfile.development);
