
exports.up = (knex, Promise) => {
  return knex.schema
  .createTable('user', table => {
    table.increments();
    table.string('name');
    table.string('email');
    table.string('password_hash');
    table.timestamp('created_at');
    table.timestamp('updated_at');
  })

  .createTable('token', table => {
    table.increments();
    table.string('token');
    table.integer('user_id').unsigned().references('user.id');
  })
};

exports.down = (knex, Promise) => 
  knex.schema
    .dropTable('user')
    .dropTable('token')
