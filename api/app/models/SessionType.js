const { bookshelf } = require('../db/database');

const SessionType = bookshelf.Model.extend({
  tableName: 'session_type',
}, {
  getAll(criteria) {
    return this.forge(criteria)
    .fetchAll()
    .then(types => types)
    .catch(error => error)
  },
})

module.exports = bookshelf.model('SessionType', SessionType);
