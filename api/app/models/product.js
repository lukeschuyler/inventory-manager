const { bookshelf } = require('../db/database');

const Product = bookshelf.Model.extend({
  tableName: 'product',
  session: function() { return this.belongsToMany('Session').through('SessionLineItem') },
}, {
  dependents: ['session'],
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
    .then(product => product)
    .catch(error => error)
  },
  getOneById(id) {
    return this.forge({id})
      .fetch()
      .then(product => product)
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

module.exports = bookshelf.model('Product', Product);
