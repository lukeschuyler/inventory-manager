
exports.up = (knex, Promise) => {
  return knex.schema
  .createTable('products', (table) => {
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
  .createTable('inventory_sessions', (table) => {
    table.increments();
    table.timestamp('date').notNullable().defaultTo(knex.fn.now())
    table.string('username')
  })
  .createTable('i_session_line_items', (table) => {
    table.increments()
    table.integer('product_id').unsigned().references('products.id')
    table.integer('inventory_session_id').unsigned().references('inventory_sessions.id')
    table.decimal('quantity').notNullable();
  })
  .createTable('waste_sessions', (table) => {
    table.increments();
    table.timestamp('date').notNullable().defaultTo(knex.fn.now())
    table.string('username')
  })
  .createTable('w_session_line_items', (table) => {
    table.increments()
    table.integer('product_id').unsigned().references('products.id')
    table.integer('waste_session_id').unsigned().references('waste_sessions.id')
    table.decimal('quantity').notNullable();
  })
  .createTable('sales_sessions', (table) => {
    table.increments();
    table.timestamp('date').notNullable().defaultTo(knex.fn.now())
    table.string('username')
  })
  .createTable('s_session_line_items', (table) => {
    table.increments()
    table.integer('product_id').unsigned().references('products.id')
    table.integer('sales_session_id').unsigned().references('sales_sessions.id')
    table.decimal('quantity').notNullable();
  })
  .createTable('receiving_sessions', (table) => {
    table.increments();
    table.timestamp('date').notNullable().defaultTo(knex.fn.now())
    table.string('username')
  })
  .createTable('r_session_line_items', (table) => {
    table.increments()
    table.integer('product_id').unsigned().references('products.id')
    table.integer('receiving_session_id').unsigned().references('receiving_sessions.id')
    table.decimal('quantity').notNullable();
  })
};

exports.down = (knex, Promise) => knex.schema
  .dropTable('i_session_line_items')
  .dropTable('w_session_line_items')
  .dropTable('s_session_line_items')
  .dropTable('r_session_line_items')
  .dropTable('products')
  .dropTable('inventory_sessions')
  .dropTable('waste_sessions')
  .dropTable('sales_sessions')
  .dropTable('receiving_sessions');
