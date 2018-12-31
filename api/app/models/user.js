const { bookshelf } = require('../db/database');
const bcrypt = require('bcryptjs');

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
  },
  async comparePassword(pw, hash) {
    let match = await compare(pw, hash);

    if (!match) {
      throw new Error();
    }

    return match;
  }
});

function compare(pw, hash) {
  return new Promise((resolve, reject) => bcrypt.compare(pw, hash, (err, res) => resolve(res))); 
}

module.exports = bookshelf.model('User', User);
