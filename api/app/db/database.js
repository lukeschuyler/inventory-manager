const environment = process.env.NODE_ENV || 'development';
const config = require('../../knexfile.js')[environment];
const knex = require('knex')(config);
const bookshelf = require('bookshelf')(knex);
const cascadeDelete = require('bookshelf-cascade-delete');
 
bookshelf.plugin(cascadeDelete);

bookshelf.plugin('registry');

module.exports = { knex, bookshelf }
