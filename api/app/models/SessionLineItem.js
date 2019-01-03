const { bookshelf } = require('../db/database');
// require('./Product');
// require('./Session');

const SessionLineItem = bookshelf.Model.extend({
  tableName: 'session_line_item',
  product: function() { return this.belongsTo('Product') },
  session: function() { return this.belongsTo('Session') }
}, {
  async getAll() {
    try {
      let items = await this.forge().fetchAll({ withRelated: ['product', 'session'], require: true });
      return items;
    }
    catch(e) {
      return e;
    }
  },
  async getAllBySession(inventory_session_id) {
    try {
      let items = await this.where({inventory_session_id})
                  .fetchAll({withRelated: ['product']})
      return items;
    }
    catch(e) {
      return e;
    }
  },
  async getOne(id) {
    try {
      let item = await this.forge({id}).fetch();
      return item;
    }
    catch(e) {
      return e;
    }
  },
  async addItem(newItem) {
    try {
      let item = await this.forge(newItem).save();
      return item;
    }
    catch(e) {
      return e;
    }
  },
  async deleteItem(id) {
    try {
      let item = await this.forge({id}).destroy();
      return item;
    }
    catch(e) {
      return e;
    }
  },
  async editItem(id, edits) {
    try {
      let item = await this.where({id}).save(edits, {method: 'update'});
      return item;
    }
    catch(e) {
      return e;
    }
  }
})

module.exports = bookshelf.model('SessionLineItem', SessionLineItem);
