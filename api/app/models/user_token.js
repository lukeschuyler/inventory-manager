const { bookshelf } = require('../db/database');
require('./user');

const UserToken = bookshelf.Model.extend({
  tableName: 'user_token',
  user: function() { return this.belongsTo('User') },
}, {
  getOne(token) {
    return this.forge({ token })
    .fetch({withRelated: ['user'], require: true})
    .then(token => token)
    .catch(error => error)
  },
});

module.exports = bookshelf.model('UserToken', UserToken);
