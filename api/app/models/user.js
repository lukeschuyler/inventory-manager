const { bookshelf } = require('../db/database');
const bcrypt = require('bcryptjs');

let { to } = global.to ? global : require('await-to-js');

// USER MODEL
class User extends bookshelf.Model {
  get tableName() { return 'user'; }

  /*
   * INITIALIZE
   * INIT LISTENERS HERE
   */
  static initialize() {
    this.on('creating', this.hashPassword, this);
  }

  /*
   * Hash password
   * @param  str { pw }   
   * @param  str { hash }
   * hash users password as hook on model
   */
  static async hashPassword(model, attrs, options) {
    let hash = await hashPassword(model);
    return hash;
  }

  /*
   * Compare password
   * @param  str { pw }   
   * @param  str { hash }
   */
  static async comparePassword(pw, hash) {
    let match = await compare(pw, hash);
    if (!match) throw new Error('Passwords do not match!');
    return match;
  }

  /*
   * GET USER BY EMAIL
   * @param  str { email }
   */
  static async getOneByEmail(email) {
    let [ err, user ] = await to(this.forge({email}).fetch());
    if (err) return err;
    return user;
  }
  
  /*
   * CRUD
   */
  static async getAll() {
    let [ err, users ] = await to(this.forge().fetchAll());
    if (err) return err;
    return users;
  }

  static async getOne(criteria) {
    let [ err, user ] = await to(this.forge(criteria).fetch());
    if (err) return err;
    return user;
  }

  static async create(newUser) {
    let [ err, user ] = await to(this.forge(newUser).save());
    if (err) return err;
    return user;
  }

  static async destroy(id) {
    let [ err, user ] = await to(this.forge({id}).destroy());
    if (err) return err;
    return user;
  }

  static async update(id, edits) {
    let [ err, user ] = await to(this.where({id}).save(edits, {method: 'update'}));
    if (err) return err;
    return user;
  }

}


// HELPERS
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
