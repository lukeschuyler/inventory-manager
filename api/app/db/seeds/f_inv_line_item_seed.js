const Session = require('../../models/Session');
const Product = require('../../models/Product');

const randomId = ids => ids[Math.floor(Math.random() * ids.length)];

exports.seed = async (knex, Promise) => {
  const products = await Product.getAll();
  let productIds = products.map(u => u.id);  

  const sessions = await Session.forge().fetchAll();
  let sessionIds = sessions.map(u => u.id);
  return Promise.all([
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 12
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 19
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 13
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 134
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 1240
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 19
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 16
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 22
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 98
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 1500
    }),        
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 12
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 19
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 13
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 134
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 1240
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 19
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 16
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 22
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 98
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 1500
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 19
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 16
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 22
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 98
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 1500
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 19
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 16
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 22
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 98
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 1500
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 19
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 16
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 22
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 98
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 1500
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 19
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 16
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 22
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 98
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 1500
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 19
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 16
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 22
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 98
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 1500
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 19
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 16
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 22
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 98
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 1500
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 19
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 16
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 22
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 98
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 1500
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 19
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 16
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 22
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 98
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 1500
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 19
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 16
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 22
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 98
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 1500
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 19
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 16
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 22
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 98
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 1500
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 19
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 16
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 22
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 98
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 1500
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 19
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 16
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 22
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 98
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 1500
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 19
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 16
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 22
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 98
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 1500
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 19
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 16
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 22
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 98
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 1500
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 19
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 16
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 22
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 98
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 1500
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 19
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 16
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 22
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 98
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 1500
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 19
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 16
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 22
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 98
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 1500
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 19
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 16
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 22
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 98
    }),
    knex('session_line_item').insert({
      product_id: randomId(productIds),
      session_id: randomId(sessionIds),
      quantity: 1500
    }),
  ]);
};
