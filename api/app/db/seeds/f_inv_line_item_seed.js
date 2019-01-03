exports.seed = (knex, Promise) => {
  return knex('session_line_item').del() 
    .then(() => { 
      return Promise.all([
        knex('session_line_item').insert({
          product_id: 3,
          session_id: 1,
          quantity: 12
        }),
        knex('session_line_item').insert({
          product_id: 4,
          session_id: 1,
          quantity: 19
        }),
        knex('session_line_item').insert({
          product_id: 5,
          session_id: 1,
          quantity: 13
        }),
        knex('session_line_item').insert({
          product_id: 2,
          session_id: 1,
          quantity: 134
        }),
        knex('session_line_item').insert({
          product_id: 1,
          session_id: 1,
          quantity: 1240
        }),
        knex('session_line_item').insert({
          product_id: 3,
          session_id: 2,
          quantity: 19
        }),
        knex('session_line_item').insert({
          product_id: 4,
          session_id: 2,
          quantity: 16
        }),
        knex('session_line_item').insert({
          product_id: 5,
          session_id: 2,
          quantity: 22
        }),
        knex('session_line_item').insert({
          product_id: 2,
          session_id: 2,
          quantity: 98
        }),
        knex('session_line_item').insert({
          product_id: 1,
          session_id: 2,
          quantity: 1500
        }),        
        knex('session_line_item').insert({
          product_id: 3,
          session_id: 3,
          quantity: 12
        }),
        knex('session_line_item').insert({
          product_id: 4,
          session_id: 3,
          quantity: 19
        }),
        knex('session_line_item').insert({
          product_id: 5,
          session_id: 3,
          quantity: 13
        }),
        knex('session_line_item').insert({
          product_id: 2,
          session_id: 3,
          quantity: 134
        }),
        knex('session_line_item').insert({
          product_id: 1,
          session_id: 3,
          quantity: 1240
        }),
        knex('session_line_item').insert({
          product_id: 3,
          session_id: 4,
          quantity: 19
        }),
        knex('session_line_item').insert({
          product_id: 4,
          session_id: 4,
          quantity: 16
        }),
        knex('session_line_item').insert({
          product_id: 5,
          session_id: 4,
          quantity: 22
        }),
        knex('session_line_item').insert({
          product_id: 2,
          session_id: 4,
          quantity: 98
        }),
        knex('session_line_item').insert({
          product_id: 1,
          session_id: 5,
          quantity: 1500
        }),
        knex('session_line_item').insert({
          product_id: 3,
          session_id: 5,
          quantity: 19
        }),
        knex('session_line_item').insert({
          product_id: 4,
          session_id: 5,
          quantity: 16
        }),
        knex('session_line_item').insert({
          product_id: 5,
          session_id: 5,
          quantity: 22
        }),
        knex('session_line_item').insert({
          product_id: 2,
          session_id: 6,
          quantity: 98
        }),
        knex('session_line_item').insert({
          product_id: 1,
          session_id: 5,
          quantity: 1500
        }),
        knex('session_line_item').insert({
          product_id: 3,
          session_id: 7,
          quantity: 19
        }),
        knex('session_line_item').insert({
          product_id: 4,
          session_id: 7,
          quantity: 16
        }),
        knex('session_line_item').insert({
          product_id: 5,
          session_id: 7,
          quantity: 22
        }),
        knex('session_line_item').insert({
          product_id: 2,
          session_id: 7,
          quantity: 98
        }),
        knex('session_line_item').insert({
          product_id: 1,
          session_id: 7,
          quantity: 1500
        }),
        knex('session_line_item').insert({
          product_id: 3,
          session_id: 8,
          quantity: 19
        }),
        knex('session_line_item').insert({
          product_id: 4,
          session_id: 8,
          quantity: 16
        }),
        knex('session_line_item').insert({
          product_id: 5,
          session_id: 8,
          quantity: 22
        }),
        knex('session_line_item').insert({
          product_id: 2,
          session_id: 8,
          quantity: 98
        }),
        knex('session_line_item').insert({
          product_id: 1,
          session_id: 8,
          quantity: 1500
        }),
        knex('session_line_item').insert({
          product_id: 3,
          session_id: 8,
          quantity: 19
        }),
        knex('session_line_item').insert({
          product_id: 4,
          session_id: 9,
          quantity: 16
        }),
        knex('session_line_item').insert({
          product_id: 5,
          session_id: 9,
          quantity: 22
        }),
        knex('session_line_item').insert({
          product_id: 2,
          session_id: 9,
          quantity: 98
        }),
        knex('session_line_item').insert({
          product_id: 1,
          session_id: 9,
          quantity: 1500
        }),
        knex('session_line_item').insert({
          product_id: 3,
          session_id: 9,
          quantity: 19
        }),
        knex('session_line_item').insert({
          product_id: 4,
          session_id: 10,
          quantity: 16
        }),
        knex('session_line_item').insert({
          product_id: 5,
          session_id: 10,
          quantity: 22
        }),
        knex('session_line_item').insert({
          product_id: 2,
          session_id: 10,
          quantity: 98
        }),
        knex('session_line_item').insert({
          product_id: 1,
          session_id: 10,
          quantity: 1500
        }),
        knex('session_line_item').insert({
          product_id: 3,
          session_id: 10,
          quantity: 19
        }),
        knex('session_line_item').insert({
          product_id: 4,
          session_id: 11,
          quantity: 16
        }),
        knex('session_line_item').insert({
          product_id: 5,
          session_id: 11,
          quantity: 22
        }),
        knex('session_line_item').insert({
          product_id: 2,
          session_id: 11,
          quantity: 98
        }),
        knex('session_line_item').insert({
          product_id: 1,
          session_id: 11,
          quantity: 1500
        }),
        knex('session_line_item').insert({
          product_id: 3,
          session_id: 11,
          quantity: 19
        }),
        knex('session_line_item').insert({
          product_id: 4,
          session_id: 12,
          quantity: 16
        }),
        knex('session_line_item').insert({
          product_id: 5,
          session_id: 12,
          quantity: 22
        }),
        knex('session_line_item').insert({
          product_id: 2,
          session_id: 12,
          quantity: 98
        }),
        knex('session_line_item').insert({
          product_id: 1,
          session_id: 12,
          quantity: 1500
        }),
        knex('session_line_item').insert({
          product_id: 3,
          session_id: 12,
          quantity: 19
        }),
        knex('session_line_item').insert({
          product_id: 4,
          session_id: 12,
          quantity: 16
        }),
        knex('session_line_item').insert({
          product_id: 5,
          session_id: 13,
          quantity: 22
        }),
        knex('session_line_item').insert({
          product_id: 2,
          session_id: 13,
          quantity: 98
        }),
        knex('session_line_item').insert({
          product_id: 1,
          session_id: 13,
          quantity: 1500
        }),
        knex('session_line_item').insert({
          product_id: 3,
          session_id: 13,
          quantity: 19
        }),
        knex('session_line_item').insert({
          product_id: 4,
          session_id: 13,
          quantity: 16
        }),
        knex('session_line_item').insert({
          product_id: 5,
          session_id: 14,
          quantity: 22
        }),
        knex('session_line_item').insert({
          product_id: 2,
          session_id: 14,
          quantity: 98
        }),
        knex('session_line_item').insert({
          product_id: 1,
          session_id: 14,
          quantity: 1500
        }),
        knex('session_line_item').insert({
          product_id: 3,
          session_id: 14,
          quantity: 19
        }),
        knex('session_line_item').insert({
          product_id: 4,
          session_id: 14,
          quantity: 16
        }),
        knex('session_line_item').insert({
          product_id: 5,
          session_id: 15,
          quantity: 22
        }),
        knex('session_line_item').insert({
          product_id: 2,
          session_id: 15,
          quantity: 98
        }),
        knex('session_line_item').insert({
          product_id: 1,
          session_id: 15,
          quantity: 1500
        }),
        knex('session_line_item').insert({
          product_id: 3,
          session_id: 15,
          quantity: 19
        }),
        knex('session_line_item').insert({
          product_id: 4,
          session_id: 15,
          quantity: 16
        }),
        knex('session_line_item').insert({
          product_id: 5,
          session_id: 16,
          quantity: 22
        }),
        knex('session_line_item').insert({
          product_id: 2,
          session_id: 16,
          quantity: 98
        }),
        knex('session_line_item').insert({
          product_id: 1,
          session_id: 16,
          quantity: 1500
        }),
        knex('session_line_item').insert({
          product_id: 3,
          session_id: 16,
          quantity: 19
        }),
        knex('session_line_item').insert({
          product_id: 4,
          session_id: 16,
          quantity: 16
        }),
        knex('session_line_item').insert({
          product_id: 5,
          session_id: 17,
          quantity: 22
        }),
        knex('session_line_item').insert({
          product_id: 2,
          session_id: 17,
          quantity: 98
        }),
        knex('session_line_item').insert({
          product_id: 1,
          session_id: 17,
          quantity: 1500
        }),
        knex('session_line_item').insert({
          product_id: 3,
          session_id: 17,
          quantity: 19
        }),
        knex('session_line_item').insert({
          product_id: 4,
          session_id: 17,
          quantity: 16
        }),
        knex('session_line_item').insert({
          product_id: 5,
          session_id: 17,
          quantity: 22
        }),
        knex('session_line_item').insert({
          product_id: 2,
          session_id: 17,
          quantity: 98
        }),
        knex('session_line_item').insert({
          product_id: 1,
          session_id: 18,
          quantity: 1500
        }),
        knex('session_line_item').insert({
          product_id: 3,
          session_id: 18,
          quantity: 19
        }),
        knex('session_line_item').insert({
          product_id: 4,
          session_id: 18,
          quantity: 16
        }),
        knex('session_line_item').insert({
          product_id: 5,
          session_id: 18,
          quantity: 22
        }),
        knex('session_line_item').insert({
          product_id: 2,
          session_id: 18,
          quantity: 98
        }),
        knex('session_line_item').insert({
          product_id: 1,
          session_id: 19,
          quantity: 1500
        }),
        knex('session_line_item').insert({
          product_id: 3,
          session_id: 19,
          quantity: 19
        }),
        knex('session_line_item').insert({
          product_id: 4,
          session_id: 19,
          quantity: 16
        }),
        knex('session_line_item').insert({
          product_id: 5,
          session_id: 19,
          quantity: 22
        }),
        knex('session_line_item').insert({
          product_id: 2,
          session_id: 20,
          quantity: 98
        }),
        knex('session_line_item').insert({
          product_id: 1,
          session_id: 20,
          quantity: 1500
        }),
        knex('session_line_item').insert({
          product_id: 3,
          session_id: 20,
          quantity: 19
        }),
        knex('session_line_item').insert({
          product_id: 4,
          session_id: 20,
          quantity: 16
        }),
        knex('session_line_item').insert({
          product_id: 5,
          session_id: 21,
          quantity: 22
        }),
        knex('session_line_item').insert({
          product_id: 2,
          session_id: 21,
          quantity: 98
        }),
        knex('session_line_item').insert({
          product_id: 1,
          session_id: 21,
          quantity: 1500
        }),
        knex('session_line_item').insert({
          product_id: 3,
          session_id: 21,
          quantity: 19
        }),
        knex('session_line_item').insert({
          product_id: 4,
          session_id: 7,
          quantity: 16
        }),
        knex('session_line_item').insert({
          product_id: 5,
          session_id: 22,
          quantity: 22
        }),
        knex('session_line_item').insert({
          product_id: 2,
          session_id: 22,
          quantity: 98
        }),
        knex('session_line_item').insert({
          product_id: 1,
          session_id: 22,
          quantity: 1500
        }),
        knex('session_line_item').insert({
          product_id: 3,
          session_id: 22,
          quantity: 19
        }),
        knex('session_line_item').insert({
          product_id: 4,
          session_id: 23,
          quantity: 16
        }),
        knex('session_line_item').insert({
          product_id: 5,
          session_id: 24,
          quantity: 22
        }),
        knex('session_line_item').insert({
          product_id: 2,
          session_id: 2,
          quantity: 98
        }),
        knex('session_line_item').insert({
          product_id: 1,
          session_id: 7,
          quantity: 1500
        }),
      ]);
    });
};
