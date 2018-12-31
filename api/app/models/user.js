const { bookshelf } = require('../db/database');

const User = bookshelf.Model.extend({
  tableName: 'user',
}, {
  getAll() {
    return this.forge()
    .fetchAll()
    .then(users => users)
    .catch(error => error)
  },
  getOne(id) {
    return this.forge({id})
    .fetch()
    .then(user => user)
    .catch(error => error)
  },
  addUser(newUser) {
    return this.forge(newUser)
    .save()
    .then(user => user)
    .catch(error => error)
  },
  deleteItem(id) {
    return this.forge({id})
    .destroy()
    .then(user => user)
    .catch(error => error)
  },
  editItem(id, edits) {
    return this.where({id})
    .save(edits, {method: 'update'})
    .then(user => user)
    .catch(error => error)
  }
});

module.exports = bookshelf.model('User', User);
