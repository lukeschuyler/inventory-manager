const { bookshelf } = require('../db/database');
let { to } = global.to ? global : require('await-to-js');

class Session extends bookshelf.Model {

  get tableName() { return 'session'; }
  get dependents() { return ['session']; }
  
  // RELATIONS
  products() { return this.belongsToMany('Product').through('SessionLineItem'); }
  user() { return this.belongsTo('User'); }
  session_type() { return this.belongsTo('SessionType'); }
  items() { return this.hasMany('SessionLineItem'); }
  
  // UNIQUE
  static async getAllByType(criteria) {
    let [ err, sessions ] = await to(this.where(criteria).fetchAll({withRelated: ['products', 'user'], require: true }));
    if (err) return err;
    return sessions;
  }

  // CRUD
  static async getAll() {
    let [ err, sessions ] = await to(this.forge().fetchAll({withRelated: ['products', 'user', 'session_type', 'items'], require: true }));
    // console.log(sessions.toJSON())
    if (err) return err;
    return sessions;
  }

  static async getOne(id) {
    let [ err, session ] = await to(this.forge({id}).fetch({withRelated: ['products', 'user', 'items'], require: true }));
    if (err) return err;
    return session;
  }

  static async create(newItem) {
    let [ err, item ] = await to(this.forge(newItem).save());
    if (err) return err;
    return item;
  }

  static async destroy(id) {
    let [ err, item ] = await to(this.forge({id}).destroy());
    if (err) return err;
    return item;
  }

  static async update(id, edits) {
    let [ err, item ] = await to(this.where(id).save(edits, {method: 'update'}));
    if (err) return err;
    return item;
  }
}

module.exports = bookshelf.model('Session', Session);
