const User = require('../../models/User');
const SessionType = require('../../models/SessionType');

const randomId = ids => ids[Math.floor(Math.random() * ids.length)];

exports.seed = async (knex, Promise) => {
  const users = await User.getAll();
  let userIds = users.map(u => u.id);  

  const sessionTypes = await SessionType.getAll();
  let sessionTypeIds = sessionTypes.map(u => u.id);
  return Promise.all([
    knex('session').insert({
      user_id: randomId(userIds),
      session_type_id: randomId(sessionTypeIds)
    }),
    knex('session').insert({
      user_id: randomId(userIds),
      session_type_id: randomId(sessionTypeIds)
    }),
    knex('session').insert({
      user_id: randomId(userIds),
      session_type_id: randomId(sessionTypeIds)
    }),
    knex('session').insert({
      user_id: randomId(userIds),
      session_type_id: randomId(sessionTypeIds)
    }),
    knex('session').insert({
      user_id: randomId(userIds),
      session_type_id: randomId(sessionTypeIds)
    }),        
    knex('session').insert({
      user_id: randomId(userIds),
      session_type_id: randomId(sessionTypeIds)
    }),
    knex('session').insert({
      user_id: randomId(userIds),
      session_type_id: randomId(sessionTypeIds)
    }),
    knex('session').insert({
      user_id: randomId(userIds),
      session_type_id: randomId(sessionTypeIds)
    }),
    knex('session').insert({
      user_id: randomId(userIds),
      session_type_id: randomId(sessionTypeIds)
    }),
    knex('session').insert({
      user_id: randomId(userIds),
      session_type_id: randomId(sessionTypeIds)
    }),        
    knex('session').insert({
      user_id: randomId(userIds),
      session_type_id: randomId(sessionTypeIds)
    }),
    knex('session').insert({
      user_id: randomId(userIds),
      session_type_id: randomId(sessionTypeIds)
    }),
    knex('session').insert({
      user_id: randomId(userIds),
      session_type_id: randomId(sessionTypeIds)
    }),
    knex('session').insert({
      user_id: randomId(userIds),
      session_type_id: randomId(sessionTypeIds)
    }),
    knex('session').insert({
      user_id: randomId(userIds),
      session_type_id: randomId(sessionTypeIds)
    }),        
    knex('session').insert({
      user_id: randomId(userIds),
      session_type_id: randomId(sessionTypeIds)
    }),
    knex('session').insert({
      user_id: randomId(userIds),
      session_type_id: randomId(sessionTypeIds)
    }),
    knex('session').insert({
      user_id: randomId(userIds),
      session_type_id: randomId(sessionTypeIds)
    }),
    knex('session').insert({
      user_id: randomId(userIds),
      session_type_id: randomId(sessionTypeIds)
    }),
    knex('session').insert({
      user_id: randomId(userIds),
      session_type_id: randomId(sessionTypeIds)
    }),        
    knex('session').insert({
      user_id: randomId(userIds),
      session_type_id: randomId(sessionTypeIds)
    }),
    knex('session').insert({
      user_id: randomId(userIds),
      session_type_id: randomId(sessionTypeIds)
    }),
    knex('session').insert({
      user_id: randomId(userIds),
      session_type_id: randomId(sessionTypeIds)
    }),
    knex('session').insert({
      user_id: randomId(userIds),
      session_type_id: randomId(sessionTypeIds)
    }),
    knex('session').insert({
      user_id: randomId(userIds),
      session_type_id: randomId(sessionTypeIds)
    }),        
    knex('session').insert({
      user_id: randomId(userIds),
      session_type_id: randomId(sessionTypeIds)
    }),
  ]);
};
