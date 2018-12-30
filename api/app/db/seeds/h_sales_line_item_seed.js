exports.seed = (knex, Promise) => {
  return knex('s_session_line_items').del() 
    .then(() => { 
      return Promise.all([
        knex('s_session_line_items').insert({
          product_id: 3,
          sales_session_id: 1,
          quantity: 12
        }),
        knex('s_session_line_items').insert({
          product_id: 4,
          sales_session_id: 1,
          quantity: 19
        }),
        knex('s_session_line_items').insert({
          product_id: 5,
          sales_session_id: 2,
          quantity: 13
        }),
        knex('s_session_line_items').insert({
          product_id: 2,
          sales_session_id: 3,
          quantity: 134
        }),
        knex('s_session_line_items').insert({
          product_id: 1,
          sales_session_id: 1,
          quantity: 1240
        }),
        knex('s_session_line_items').insert({
          product_id: 3,
          sales_session_id: 2,
          quantity: 19
        }),
        knex('s_session_line_items').insert({
          product_id: 4,
          sales_session_id: 2,
          quantity: 16
        }),
        knex('s_session_line_items').insert({
          product_id: 5,
          sales_session_id: 2,
          quantity: 22
        }),
        knex('s_session_line_items').insert({
          product_id: 2,
          sales_session_id: 1,
          quantity: 98
        }),
        knex('s_session_line_items').insert({
          product_id: 1,
          sales_session_id: 2,
          quantity: 1500
        }),        
        knex('s_session_line_items').insert({
          product_id: 3,
          sales_session_id: 3,
          quantity: 12
        }),
        knex('s_session_line_items').insert({
          product_id: 4,
          sales_session_id: 3,
          quantity: 19
        }),
        knex('s_session_line_items').insert({
          product_id: 5,
          sales_session_id: 3,
          quantity: 13
        }),
        knex('s_session_line_items').insert({
          product_id: 2,
          sales_session_id: 3,
          quantity: 134
        }),
        knex('s_session_line_items').insert({
          product_id: 1,
          sales_session_id: 3,
          quantity: 1240
        }),
        knex('s_session_line_items').insert({
          product_id: 3,
          sales_session_id: 4,
          quantity: 19
        }),
        knex('s_session_line_items').insert({
          product_id: 4,
          sales_session_id: 3,
          quantity: 16
        }),
        knex('s_session_line_items').insert({
          product_id: 5,
          sales_session_id: 4,
          quantity: 22
        }),
        knex('s_session_line_items').insert({
          product_id: 2,
          sales_session_id: 2,
          quantity: 98
        }),
        knex('s_session_line_items').insert({
          product_id: 1,
          sales_session_id: 4,
          quantity: 1500
        }),
      ]);
    });
};
