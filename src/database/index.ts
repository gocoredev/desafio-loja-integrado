import Knex from 'knex';

const dev = require('../../knexfile');

const knex = Knex(dev.development);

export default knex;
