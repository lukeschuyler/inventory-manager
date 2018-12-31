const { bookshelf } = require('../db/database')
require('./inv_session')
require('./inv_line_item')
require('./waste_session')
require('./waste_line_item')
require('./rec_session')
require('./rec_line_item')
require('./sales_session')
require('./sales_line_item')

const Product = bookshelf.Model.extend({
  tableName: 'product',
  wasteSession: function() { return this.belongsToMany('WasteSession').through('WasteLineItem') },
  invSession: function() { return this.belongsToMany('InvSession').through('InvLineItem') },
  salesSession: function() { return this.belongsToMany('SalesSession').through('SalesLineItem') },
  recSession: function() { return this.belongsToMany('RecSession').through('RecLineItem') }
}, {
  dependents: ['wasteSession', 'invSession', 'salesSession', 'recSession'],
  getAll() {
    return this.forge()
    .fetchAll()
    .then(products => products)
    .catch(error => error)
  },
  getAllCurrent() {
    return this.where({active: 'y'})
    .fetchAll()
    .then(products => products)
    .catch(error => error)
  },
  getOne(id) {
    return this.forge({upc_code: id})
    .fetch()
    .then(product => {
      return product
    })
    .catch(error => error)
  },
  getOneById(id) {
    return this.forge({id})
      .fetch()
      .then(product => {
        return product
      })
      .catch(error => error)
  },
  addProduct(newProduct) {
    return this.forge(newProduct)
    .save()
    .then(product => product)
    .catch(error => error)
  },
  deleteProduct(id) {
    return this.where({id})
    .save({active: 'n'}, {method: 'update'})
    .then(product => product)
    .catch(error => error)
  },
  editProduct(id, edits) {
    return this.where({id})
    .save(edits, {method: 'update'})
    .then(product => product)
    .catch(error => error)
  }
})

module.exports = bookshelf.model('Product', Product)
