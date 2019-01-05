const { bookshelf } = require('../db/database');

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
  create(token, userId) {
    return this.forge({token, user_id: userId})
    .save()
    .then(token => token)
    .catch(error => error)
  },
  destroy(userId) {
    return this.forge({ user_id: userId })
    .destroy()
    .then(token => token)
    .catch(error => error)
  }
});

module.exports = bookshelf.model('UserToken', UserToken);
