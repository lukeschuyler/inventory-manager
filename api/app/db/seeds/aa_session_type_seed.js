exports.seed = async (knex, Promise) => {
  await knex('session_type').del();
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
