exports.seed = (knex, Promise) => {
  return knex('waste_session').del() 
    .then(() => { 
      return Promise.all([
        knex('waste_session').insert({
          user_id: 5
        }),
        knex('waste_session').insert({
          user_id: 5
        }),
        knex('waste_session').insert({
          user_id: 1
        }),
        knex('waste_session').insert({
          user_id: 2
        }),
        knex('waste_session').insert({
          user_id: 3
        })
      ]);
    });
};
