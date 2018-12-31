exports.seed = (knex, Promise) => {
  return knex('sales_session').del() 
    .then(() => { 
      return Promise.all([
        knex('sales_session').insert({
          user_id: 3
        }),
        knex('sales_session').insert({
          user_id: 3
        }),
        knex('sales_session').insert({
          user_id: 3
        }),
        knex('sales_session').insert({
          user_id: 4
        }),
        knex('sales_session').insert({
          user_id: 4
        })
      ]);
    });
};
