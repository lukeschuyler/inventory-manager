const { bookshelf } = require('../db/database');
require('./SessionLineItem');
require('./Product');

const Session = bookshelf.Model.extend({
  tableName: 'session',
  products: function() { return this.belongsToMany('Product').through('SessionLineItem') },
  user: function() { return this.belongsTo('User') },
  user: function() { return this.belongsTo('SessionType') },
  items: function() { return this.hasMany('SessionLineItem') }
}, {
  getAll(criteria) {
    return this.forge(criteria)
    .fetchAll({withRelated: ['products', 'user'], require: true})
    .then(sessions => sessions)
    .catch(error => error)
  },
  getOne(id) {
    return this.forge({id})
    .fetch({withRelated: ['products', 'user', 'items'], require: true})
    .then(session => session)
    .catch(error => error)
  },
  addSession(newSession) {
    return this.forge(newSession)
    .save()
    .then(session => session)
    .catch(error => error)
  },
  deleteSession(id) {
    return this.forge({id})
    .destroy()
    .then(session => session)
    .catch(error => error)
  },
  editSession(id, edits) {
    return this.where({id})
    .save(edits, {method: 'update'})
    .then(session => session)
    .catch(error => error)
  }
})

module.exports = bookshelf.model('Session', Session)