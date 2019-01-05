const { bookshelf } = require('../db/database');


/*
 * BASE MODEL FOR APPLICATION
 * PROVIDES REUSABLE CRUD FOR ALL MODELS
 * EXTENDED FROM THIS MODEL
 */
const Model = bookshelf.model('Model', 
  bookshelf.Model.extend({
    getAll() {
      return this.forge()
      .fetchAll()
      .then(items => items)
      .catch(error => error)
    },    
    getOne(criterion) {
      return this.where(criterion)
      .fetch()
      .then(item => item)
      .catch(error => error)
    },
    create(newItem) {
      return this.forge(newItem)
      .save()
      .then(item => item)
      .catch(error => error)
    },
    delete(id) {
      return this.forge({id})
      .destroy()
      .then(item => item)
      .catch(error => error)
    },
    update(criterion, edits) {
      return this.where(criterion)
      .save(edits, {method: 'update'})
      .then(item => item)
      .catch(error => error)
    }
  })
);
