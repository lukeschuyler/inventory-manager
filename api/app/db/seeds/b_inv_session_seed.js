exports.seed = (knex, Promise) => {
  return knex('session').del() 
    .then(() => { 
      return Promise.all([
        knex('session').insert({
          user_id: 1,
          session_type_id: 1
        }),
        knex('session').insert({
          user_id: 2,
          session_type_id: 2
        }),
        knex('session').insert({
          user_id: 2,
          session_type_id: 3
        }),
        knex('session').insert({
          user_id: 3,
          session_type_id: 4
        }),
        knex('session').insert({
          user_id: 4,
          session_type_id: 3
        }),        
        knex('session').insert({
          user_id: 4,
          session_type_id: 3
        }),
        knex('session').insert({
          user_id: 2,
          session_type_id: 1
        }),
        knex('session').insert({
          user_id: 2,
          session_type_id: 3
        }),
        knex('session').insert({
          user_id: 3,
          session_type_id: 4
        }),
        knex('session').insert({
          user_id: 4,
          session_type_id: 3
        }),        
        knex('session').insert({
          user_id: 4,
          session_type_id: 3
        }),
        knex('session').insert({
          user_id: 2,
          session_type_id: 2
        }),
        knex('session').insert({
          user_id: 1,
          session_type_id: 1
        }),
        knex('session').insert({
          user_id: 1,
          session_type_id: 4
        }),
        knex('session').insert({
          user_id: 4,
          session_type_id: 1
        }),        
        knex('session').insert({
          user_id: 4,
          session_type_id: 3
        }),
        knex('session').insert({
          user_id: 1,
          session_type_id: 2
        }),
        knex('session').insert({
          user_id: 2,
          session_type_id: 3
        }),
        knex('session').insert({
          user_id: 3,
          session_type_id: 4
        }),
        knex('session').insert({
          user_id: 4,
          session_type_id: 3
        }),        
        knex('session').insert({
          user_id: 4,
          session_type_id: 1
        }),
        knex('session').insert({
          user_id: 2,
          session_type_id: 2
        }),
        knex('session').insert({
          user_id: 1,
          session_type_id: 3
        }),
        knex('session').insert({
          user_id: 1,
          session_type_id: 4
        }),
        knex('session').insert({
          user_id: 4,
          session_type_id: 3
        }),        
        knex('session').insert({
          user_id: 4,
          session_type_id: 3
        }),
      ]);
    });
};
