const bcrypt = require('bcryptjs');

exports.seed = async (knex, Promise) => {
  await knex('user').del();
  return Promise.all([
    knex('user').insert({
      name: "Luke Schuyler",
      email: "lukeschuyler1@d.com",
      password_hash: await hashPassword('llllll')
    }),
    knex('user').insert({
      name: "Todd Rundgren",
      email: "trund@t.com",
      password_hash: await hashPassword('tttttt')
    }),
    knex('user').insert({
      name: "Pat Thomas",
      email: "pthomas@g.com",
      password_hash: await hashPassword('pppppp')
    }),
    knex('user').insert({
      name: "Michael Tambornino",
      email: "mtambo@t.com",
      password_hash: await hashPassword('mmmmmm')
    }),
    knex('user').insert({
      name: "Roy Schuyler",
      email: "royschuyler@l.com",
      password_hash: await hashPassword('rrrrrr')
    })
  ]);
};

const hashPassword = pw => {
  return new Promise((res, rej) => {
    bcrypt.hash(pw, 10, function(err, hash) {
      if (err) rej(err);
      res(hash);
    });
  });
}
