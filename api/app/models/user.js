const { bookshelf } = require('../db/database');
const bcrypt = require('bcryptjs');

let { to } = global.to ? global : require('await-to-js');

const User = bookshelf.Model.extend({
  tableName: 'user',
  initialize: function() {
    this.on('creating', this.hashPassword, this);
  },
  hashPassword: async function(model, attrs, options) {
    let hash = await hashPassword(model);
    return hash;
  },
}, {
  async getAll() {
    let [ err, users ] = await to(this.forge().fetchAll());
    if (err) return err;
    return users;
  },
  async getOne(id) {
    let [ err, user ] = await to(this.forge({id}).fetch());
    if (err) return err;
    return user;
  },  
  async getOneByEmail(email) {
    let [ err, user ] = await to(this.forge({email}).fetch());
    if (err) return err;
    return user;
  },
  async addUser(newUser) {
    let [ err, user ] = await to(this.forge(newUser).save());
    if (err) return err;
    return user;
  },
  async deleteItem(id) {
    let [ err, user ] = await to(this.forge({id}).destroy());
    if (err) return err;
    return user;
  },
  async editItem(id, edits) {
    let [ err, user ] = await to(this.where({id}).save(edits, {method: 'update'}));
    if (err) return err;
    return user;
  },
  async comparePassword(pw, hash) {
    let match = await compare(pw, hash);
    if (!match) throw new Error('Passwords do not match!');

    return match;
  },
});

function compare(pw, hash) { 
  return new Promise((resolve, reject) => {
    bcrypt.compare(pw, hash, (err, res) => {
      resolve(res);
    });
  }); 
}

const hashPassword = model => {
  return new Promise((res, rej) => {
    bcrypt.hash(model.attributes.password_hash, 10, function(err, hash) {
      if (err) rej(err);
      model.set('password_hash', hash);
      res(hash);
    });
  });
}


module.exports = bookshelf.model('User', User);
