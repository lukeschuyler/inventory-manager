const { bookshelf } = require('../db/database');
const { to } = global.to ? global : require('await-to-js');

class Product extends bookshelf.Model {

  get tableName() { return 'product'; }
  get dependents() { return ['session'] }

  session() { 
    return this.belongsToMany('Session').through('SessionLineItem');
  }

  static async getAllCurrent() {
    let [ err, products ] = await to(this.where({active: 'y'}).fetchAll());
    if (err) return err;
    return products;
  }

  static async getOneById(id) {
    let [ err, product ] = await to(this.forge({id}).fetch());
    if (err) return err;
    return product;
  }

  static async deleteProduct(id) {
    let [ err, product ] = await to(this.where({id}).save({active: 'n'}, {method: 'update'}));
    if (err) return err;
    return product;
  }

  static async getAll() {
    let [ err, items ] = await to(this.forge().fetchAll());
    if (err) return err;
    return items;
  }   

  static async getOne(id) {
    let [ err, item ] = await to(this.forge({id}).fetch());
    if (err) return err;
    return item;
  }

  static async create(newItem) {
    let [ err, item ] = await to(this.forge(newItem).save());
    if (err) return err;
    return item;
  }

  static async destroy(id) {
    let [ err, item ] = await to(this.forge({id}).destroy());
    if (err) return err;
    return item;
  }

  static async update(id, edits) {
    console.log(edits)
    let [ err, items ] = await to(this.where(id).save(edits, {method: 'update'}));
    console.log(err)
    if (err) return err;
    return items;
  }
}

module.exports = bookshelf.model('Product', Product);
