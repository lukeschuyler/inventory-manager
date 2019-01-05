exports.seed = async (knex, Promise) => {
  return Promise.all([
    knex('session_type').insert({
      title: "Sales",
    }),
    knex('session_type').insert({
      title: "Inventory",
    }),
    knex('session_type').insert({
      title: "Waste",
    }),
    knex('session_type').insert({
      title: "Receiving",
    }),
  ]);
};
