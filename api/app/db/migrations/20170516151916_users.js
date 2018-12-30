
exports.up = (knex, Promise) => {
  return knex.schema
  .createTable('users', (table) => {
    table.increments();
    table.string('name')
  })
};

exports.down = (knex, Promise) => knex.schema
  .dropTable('users')
