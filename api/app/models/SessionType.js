const { bookshelf } = require('../db/database');
let { to } = global.to ? global : require('await-to-js');

class SessionType extends bookshelf.Model {
  get tableName() { return 'session_type'; }

  static async getAll() {
    let [ err, types ] = await to (this.forge().fetchAll());
    if (err) return err;
    return types;
  }
}

module.exports = bookshelf.model('SessionType', SessionType);
