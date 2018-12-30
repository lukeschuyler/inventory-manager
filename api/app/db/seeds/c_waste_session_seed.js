exports.seed = (knex, Promise) => {
  return knex('waste_sessions').del() 
    .then(() => { 
      return Promise.all([
        knex('waste_sessions').insert({
          username: "lskyler"
        }),
        knex('waste_sessions').insert({
          username: "qstate"
        }),
        knex('waste_sessions').insert({
          username: "pthomas"
        }),
        knex('waste_sessions').insert({
          username: "mtambo"
        }),
        knex('waste_sessions').insert({
          username: "stevebrownlee"
        })
      ]);
    });
};
