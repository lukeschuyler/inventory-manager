const { bookshelf } = require('../db/database');

require('./waste_line_item');
require('./product');

const WasteSession = bookshelf.Model.extend({
  tableName: 'waste_session',
  products: function() { return this.belongsToMany('Product').through('WasteLineItem') },
  user: function() { return this.belongsTo('User') },
  items: function() { return this.hasMany('WasteLineItem') }
}, {
  getAll() {
    return this.forge()
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
    console.log(id)
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

module.exports = bookshelf.model('WasteSession', WasteSession)
