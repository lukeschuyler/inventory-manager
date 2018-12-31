exports.seed = (knex, Promise) => {
  return knex('waste_session').del() 
    .then(() => { 
      return Promise.all([
        knex('waste_session').insert({
          username: "lskyler"
        }),
        knex('waste_session').insert({
          username: "qstate"
        }),
        knex('waste_session').insert({
          username: "pthomas"
        }),
        knex('waste_session').insert({
          username: "mtambo"
        }),
        knex('waste_session').insert({
          username: "stevebrownlee"
        })
      ]);
    });
};
