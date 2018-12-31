exports.seed = (knex, Promise) => {
  return knex('sales_session').del() 
    .then(() => { 
      return Promise.all([
        knex('sales_session').insert({
          username: "frippertron"
        }),
        knex('sales_session').insert({
          username: "shawn123"
        }),
        knex('sales_session').insert({
          username: "jamiethomas"
        }),
        knex('sales_session').insert({
          username: "dsurrett"
        }),
        knex('sales_session').insert({
          username: "dsurrett"
        })
      ]);
    });
};
