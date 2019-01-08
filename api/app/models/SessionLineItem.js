const { bookshelf } = require('../db/database');

class SessionLineItem extends bookshelf.Model {
  get tableName() { return 'session_line_item'; }

  session() { 
    return this.belongsTo('Session');
  }

  product() { 
    return this.belongsTo('Product');
  }

  static async getAll() {
    let [ err, items ] = await to(this.forge().fetchAll({ withRelated: ['product', 'session'], require: true }));
    if (err) return err;
    return items;
  }

  static async getAllBySession(inventory_session_id) {
    let [ err, items ] = await to(this.where({inventory_session_id})
                              .fetchAll({withRelated: ['product']}));
    if (err) return err;
    return items;
  }

  static async getOne(id) {
    let [ err, item ] = await to(this.forge({id}).fetch());
    if (err) return err;
    return item;
  }

  static async addItem(newItem) {
    let [ err, item ] = await to(this.forge(newItem).save());
    if (err) return err;
    return item;
  }

  static async deleteItem(id) {
    let [ err, item ] = await to(this.forge({id}).destroy());
    if (err) return err;
    return item;
  }

  static async editItem(id, edits) {
    let [ err, items ] = await to(this.where({id}).save(edits, {method: 'update'}));
    if (err) return err;
    return items;
  }
}

module.exports = bookshelf.model('SessionLineItem', SessionLineItem);
