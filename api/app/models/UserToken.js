const { bookshelf } = require('../db/database');

class UserToken extends bookshelf.Model {
  get tableName() { return 'user_token'; }
  
  user() { return this.belongsTo('User'); }  

  static async getOne(token) {
    let [ err, userToken ] = await to(this.forge({ token }).fetch({withRelated: ['user'], require: true}));
    if (err) return err;
    return userToken;
  }

  static async create(token, userId) {
    let [ err, userToken ] = await to(this.forge({token, user_id: userId}).save());
    if (err) return err;
    return userToken;
  }

  static async destroy(userId) {
    let [ err, userToken ] = await to(this.forge({ user_id: userId }).destroy());
    if (err) return err;
    return userToken;
  }

}

module.exports = bookshelf.model('UserToken', UserToken);
