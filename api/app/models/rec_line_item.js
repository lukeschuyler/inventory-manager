'use strict'

const { bookshelf } = require('../db/database')
require('./product')
require('./rec_session')

const RecLineItem = bookshelf.Model.extend({
  tableName: 'r_session_line_item',
  product: function() { return this.belongsTo('Product') },
  session: function() { return this.belongsTo('RecSession') }
}, {
  getAll() {
    return this.forge()
    .fetchAll({withRelated: ['product', 'session'], require: true})
    .then(items => items)
    .catch(error => error)
  },
  getAllBySession(receiving_session_id) {
    return this.where({receiving_session_id})
    .fetchAll({withRelated: ['product']})
    .then(items => items)
    .catch(error => error)
  },
  getOne(id) {
    return this.forge({id})
    .fetch()
    .then(item => item)
    .catch(error => error)
  },
  addItem(newItem) {
    return this.forge(newItem)
    .save()
    .then(item => item)
    .catch(error => error)
  },
  deleteItem(id) {
    return this.forge({id})
    .destroy()
    .then(item => item)
    .catch(error => error)
  },
  editItem(id, edits) {
    return this.where({id})
    .save(edits, {method: 'update'})
    .then(item => item)
    .catch(error => error)
  }
})

module.exports = bookshelf.model('RecLineItem', RecLineItem)
