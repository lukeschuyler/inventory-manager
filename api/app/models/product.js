const { bookshelf } = require('../db/database');

class Product extends bookshelf.Model {

  get tableName() { return 'product'; }
  get dependents() { return ['session'] }

  static getAllCurrent() {
    return this.where({active: 'y'})
    .fetchAll()
    .then(products => products)
    .catch(error => error)
  }

  static getOneById(id) {
    return this.forge({id})
      .fetch()
      .then(product => product)
      .catch(error => error)
  }

  static deleteProduct(id) {
    return this.where({id})
    .save({active: 'n'}, {method: 'update'})
    .then(product => product)
    .catch(error => error)
  }

  static getAll() {
    return this.forge()
    .fetchAll()
    .then(items => items)
    .catch(error => error)
  }   

  static getOne(criterion) {
    return this.where(criterion)
    .fetch()
    .then(item => item)
    .catch(error => error)
  }

  static create(newItem) {
    return this.forge(newItem)
    .save()
    .then(item => item)
    .catch(error => error)
  }

  static destroy(id) {
    return this.forge({id})
    .destroy()
    .then(item => item)
    .catch(error => error)
  }

  static update(criterion, edits) {
    return this.where(criterion)
    .save(edits, {method: 'update'})
    .then(item => item)
    .catch(error => error)
  }
}

module.exports = bookshelf.model('Product', Product);
