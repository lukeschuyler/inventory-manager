exports.seed = (knex, Promise) => {
  return knex('r_session_line_item').del() 
    .then(() => { 
      return Promise.all([
        knex('r_session_line_item').insert({
          product_id: 3,
          receiving_session_id: 1,
          quantity: 12
        }),
        knex('r_session_line_item').insert({
          product_id: 4,
          receiving_session_id: 1,
          quantity: 19
        }),
        knex('r_session_line_item').insert({
          product_id: 5,
          receiving_session_id: 2,
          quantity: 13
        }),
        knex('r_session_line_item').insert({
          product_id: 2,
          receiving_session_id: 3,
          quantity: 134
        }),
        knex('r_session_line_item').insert({
          product_id: 1,
          receiving_session_id: 1,
          quantity: 1240
        }),
        knex('r_session_line_item').insert({
          product_id: 3,
          receiving_session_id: 2,
          quantity: 19
        }),
        knex('r_session_line_item').insert({
          product_id: 4,
          receiving_session_id: 2,
          quantity: 16
        }),
        knex('r_session_line_item').insert({
          product_id: 5,
          receiving_session_id: 2,
          quantity: 22
        }),
        knex('r_session_line_item').insert({
          product_id: 2,
          receiving_session_id: 1,
          quantity: 98
        }),
        knex('r_session_line_item').insert({
          product_id: 1,
          receiving_session_id: 2,
          quantity: 1500
        }),        
        knex('r_session_line_item').insert({
          product_id: 3,
          receiving_session_id: 3,
          quantity: 12
        }),
        knex('r_session_line_item').insert({
          product_id: 4,
          receiving_session_id: 3,
          quantity: 19
        }),
        knex('r_session_line_item').insert({
          product_id: 5,
          receiving_session_id: 3,
          quantity: 13
        }),
        knex('r_session_line_item').insert({
          product_id: 2,
          receiving_session_id: 3,
          quantity: 134
        }),
        knex('r_session_line_item').insert({
          product_id: 1,
          receiving_session_id: 3,
          quantity: 1240
        }),
        knex('r_session_line_item').insert({
          product_id: 3,
          receiving_session_id: 4,
          quantity: 19
        }),
        knex('r_session_line_item').insert({
          product_id: 4,
          receiving_session_id: 3,
          quantity: 16
        }),
        knex('r_session_line_item').insert({
          product_id: 5,
          receiving_session_id: 4,
          quantity: 22
        }),
        knex('r_session_line_item').insert({
          product_id: 2,
          receiving_session_id: 2,
          quantity: 98
        }),
        knex('r_session_line_item').insert({
          product_id: 1,
          receiving_session_id: 4,
          quantity: 1500
        }),
      ]);
    });
};
