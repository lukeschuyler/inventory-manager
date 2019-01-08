
exports.up = (knex, Promise) => {
  return knex.schema
  .createTable('user', table => {
    console.log('Creating user table...');
    table.increments();
    table.string('name');
    table.string('email');
    table.string('password_hash');
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at');
  })

  .createTable('user_token', table => {
    console.log('Creating token table...');
    table.increments();
    table.string('token');
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.integer('user_id').unsigned().references('user.id');
  })

  .createTable('product', table => {
    console.log('Creating product table...');
    table.increments();
    table.bigInteger('upc_code').unsigned().notNullable().unique();
    table.string('name').notNullable();
    table.string('measure').notNullable();
    table.string('image');
    table.string('description', 1000).notNullable();
    table.string('price').notNullable();
    table.integer('popularity');
    table.integer('current_qty').notNullable();
    table.string('stock').notNullable();
    table.string('active').notNullable();
  })

  .createTable('session_type', table => {
    console.log('Creating session_type table...');
    table.increments();
    table.string('title').notNullable();
  })

  .createTable('session', table => {
    console.log('Creating session table...');
    table.increments();
    table.timestamp('date').notNullable().defaultTo(knex.fn.now());

    table.integer('user_id').unsigned().references('user.id');
    table.integer('session_type_id').unsigned().references('session_type.id');
  })

  .createTable('session_line_item', table => {
    console.log('Creating session_line_item table;...')
    table.increments();
    table.decimal('quantity').notNullable();

    table.integer('product_id').unsigned().references('product.id');
    table.integer('session_id').unsigned().references('session.id');
  });

  console.log('Done');
;  
};

exports.down = (knex, Promise) => knex.schema
  .dropTable('user_token')
  .dropTable('session_line_item')
  .dropTable('product')
  .dropTable('session')
  .dropTable('session_type')
  .dropTable('user');
