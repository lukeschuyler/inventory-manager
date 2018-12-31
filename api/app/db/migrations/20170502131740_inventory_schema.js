
exports.up = (knex, Promise) => {
  return knex.schema
  .createTable('product', (table) => {
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
  .createTable('inventory_session', (table) => {
    table.increments();
    table.timestamp('date').notNullable().defaultTo(knex.fn.now())
    table.string('username')
  })
  .createTable('i_session_line_item', (table) => {
    table.increments()
    table.integer('product_id').unsigned().references('product.id')
    table.integer('inventory_session_id').unsigned().references('inventory_session.id')
    table.decimal('quantity').notNullable();
  })
  .createTable('waste_session', (table) => {
    table.increments();
    table.timestamp('date').notNullable().defaultTo(knex.fn.now())
    table.string('username')
  })
  .createTable('w_session_line_item', (table) => {
    table.increments()
    table.integer('product_id').unsigned().references('product.id')
    table.integer('waste_session_id').unsigned().references('waste_session.id')
    table.decimal('quantity').notNullable();
  })
  .createTable('sales_session', (table) => {
    table.increments();
    table.timestamp('date').notNullable().defaultTo(knex.fn.now())
    table.string('username')
  })
  .createTable('s_session_line_item', (table) => {
    table.increments()
    table.integer('product_id').unsigned().references('product.id')
    table.integer('sales_session_id').unsigned().references('sales_session.id')
    table.decimal('quantity').notNullable();
  })
  .createTable('receiving_session', (table) => {
    table.increments();
    table.timestamp('date').notNullable().defaultTo(knex.fn.now())
    table.string('username')
  })
  .createTable('r_session_line_item', (table) => {
    table.increments()
    table.integer('product_id').unsigned().references('product.id')
    table.integer('receiving_session_id').unsigned().references('receiving_session.id')
    table.decimal('quantity').notNullable();
  })
};

exports.down = (knex, Promise) => knex.schema
  .dropTable('i_session_line_item')
  .dropTable('w_session_line_item')
  .dropTable('s_session_line_item')
  .dropTable('r_session_line_item')
  .dropTable('product')
  .dropTable('inventory_session')
  .dropTable('waste_session')
  .dropTable('sales_session')
  .dropTable('receiving_session');
