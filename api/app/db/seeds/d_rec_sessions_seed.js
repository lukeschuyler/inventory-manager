exports.seed = (knex, Promise) => {
  return knex('receiving_session').del() 
    .then(() => { 
      return Promise.all([
        knex('receiving_session').insert({
          username: "dougiefrsh"
        }),
        knex('receiving_session').insert({
          username: "clarkfredo"
        }),
        knex('receiving_session').insert({
          username: "clarkfredo"
        }),
        knex('receiving_session').insert({
          username: "jesseclardy"
        }),
        knex('receiving_session').insert({
          username: "dougiefresh"
        })
      ]);
    });
};
