const { bookshelf } = require('../db/database');

class UserToken extends bookshelf.Model {
  get tableName() { return 'user_token'; }
  
  async getOne(token) {
    let [ err, userToken ] = await to(this.forge({ token }).fetch({withRelated: ['user'], require: true}));
    if (err) return err;
    return userToken;
  }

  async create(token, userId) {
    let [ err, userToken ] = await to(this.forge({token, user_id: userId}).save());
    if (err) return err;
    return userToken;
  }

  async destroy(userId) {
    let [ err, userToken ] = await to(this.forge({ user_id: userId }).destroy());
    if (err) return err;
    return userToken;
  }

}

module.exports = bookshelf.model('UserToken', UserToken);
