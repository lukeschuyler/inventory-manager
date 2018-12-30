exports.seed = (knex, Promise) => {
  return knex('sales_sessions').del() 
    .then(() => { 
      return Promise.all([
        knex('sales_sessions').insert({
          username: "frippertron"
        }),
        knex('sales_sessions').insert({
          username: "shawn123"
        }),
        knex('sales_sessions').insert({
          username: "jamiethomas"
        }),
        knex('sales_sessions').insert({
          username: "dsurrett"
        }),
        knex('sales_sessions').insert({
          username: "dsurrett"
        })
      ]);
    });
};
