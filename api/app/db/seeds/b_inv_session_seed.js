exports.seed = (knex, Promise) => {
  return knex('inventory_session').del() 
    .then(() => { 
      return Promise.all([
        knex('inventory_session').insert({
          username: "johnthomas"
        }),
        knex('inventory_session').insert({
          username: "stevebrownlee"
        }),
        knex('inventory_session').insert({
          username: "johnthomas"
        }),
        knex('inventory_session').insert({
          username: "mtambo"
        }),
        knex('inventory_session').insert({
          username: "stevebrownlee"
        })
      ]);
    });
};
