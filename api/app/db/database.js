const environment = process.env.NODE_ENV || 'development';

// knex instance
const config = require('../../knexfile.js')[environment];
const knex = require('knex')(config);

// bookshelf instance
const bookshelf = require('bookshelf')(knex);

// For foreign key auto delete
const cascadeDelete = require('bookshelf-cascade-delete');
bookshelf.plugin(cascadeDelete);

// for model referencing (avoids circular dependency)
bookshelf.plugin('registry');

module.exports = { knex, bookshelf }
