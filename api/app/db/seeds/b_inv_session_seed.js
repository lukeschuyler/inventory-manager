exports.seed = (knex, Promise) => {
  return knex('inventory_sessions').del() 
    .then(() => { 
      return Promise.all([
        knex('inventory_sessions').insert({
          username: "johnthomas"
        }),
        knex('inventory_sessions').insert({
          username: "stevebrownlee"
        }),
        knex('inventory_sessions').insert({
          username: "johnthomas"
        }),
        knex('inventory_sessions').insert({
          username: "mtambo"
        }),
        knex('inventory_sessions').insert({
          username: "stevebrownlee"
        })
      ]);
    });
};
