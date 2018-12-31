exports.seed = (knex, Promise) => {
  return knex('inventory_session').del() 
    .then(() => { 
      return Promise.all([
        knex('inventory_session').insert({
          user_id: 1
        }),
        knex('inventory_session').insert({
          user_id: 2
        }),
        knex('inventory_session').insert({
          user_id: 2
        }),
        knex('inventory_session').insert({
          user_id: 3
        }),
        knex('inventory_session').insert({
          user_id: 4
        })
      ]);
    });
};
