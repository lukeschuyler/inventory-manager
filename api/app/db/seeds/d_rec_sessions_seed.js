exports.seed = (knex, Promise) => {
  return knex('receiving_session').del() 
    .then(() => { 
      return Promise.all([
        knex('receiving_session').insert({
          user_id: 1
        }),
        knex('receiving_session').insert({
          user_id: 4
        }),
        knex('receiving_session').insert({
          user_id: 4
        }),
        knex('receiving_session').insert({
          user_id: 2
        }),
        knex('receiving_session').insert({
          user_id: 5
        })
      ]);
    });
};
