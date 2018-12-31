const { bookshelf } = require('../db/database')
require('./inv_line_item')
require('./product')

const InvSession = bookshelf.Model.extend({
  tableName: 'inventory_session',
  products: function() { return this.belongsToMany('Product').through('InvLineItem') },
  items: function() { return this.hasMany('InvLineItem') }
}, {
  getAll() {
    return this.forge()
    .fetchAll({withRelated: ['products'], require: true})
    .then(sessions => sessions)
    .catch(error => error)
  },
  getOne(id) {
    return this.forge({id})
    .fetch({withRelated: ['products', 'items'], require: true})
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

module.exports = bookshelf.model('InvSession', InvSession)
