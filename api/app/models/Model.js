const { bookshelf } = require('../db/database');

// NOT IN USE YET
// ATTEMPTING TO CREATE BASE DB MODEL
class Model extends bookshelf.Model
{
  constructor(...args) {
    super(...args);
    const [ model, tableName ] = args;
    this._model = model;
    this._tableName = tableName;
  }

  get tableName() { return this._tableName; }

  getAll() {
    return this._model.forge()
    .fetchAll()
    .then(items => items)
    .catch(error => error)
  }   

  getOne(criterion) {
    return this._model.where(criterion)
    .fetch()
    .then(item => item)
    .catch(error => error)
  }

  create(newItem) {
    return this._model.forge(newItem)
    .save()
    .then(item => item)
    .catch(error => error)
  }

  destroy(id) {
    return this._model.forge({id})
    .destroy()
    .then(item => item)
    .catch(error => error)
  }

  update(criterion, edits) {
    return this._model.where(criterion)
    .save(edits, {method: 'update'})
    .then(item => item)
    .catch(error => error)
  }
}

module.exports = { Model };
