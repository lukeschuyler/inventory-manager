exports.seed = (knex, Promise) => {
  return knex('receiving_sessions').del() 
    .then(() => { 
      return Promise.all([
        knex('receiving_sessions').insert({
          username: "dougiefrsh"
        }),
        knex('receiving_sessions').insert({
          username: "clarkfredo"
        }),
        knex('receiving_sessions').insert({
          username: "clarkfredo"
        }),
        knex('receiving_sessions').insert({
          username: "jesseclardy"
        }),
        knex('receiving_sessions').insert({
          username: "dougiefresh"
        })
      ]);
    });
};
