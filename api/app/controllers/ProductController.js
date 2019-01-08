const Product = require('../models/Product');
const Controller = require('./Controller');

/*
 * ProductController
 */
 
class ProductController extends Controller {
  constructor() {
    super(Product);
  }

  async getAllCurrent(req, res, next) {
    let [ err, products ] = await to(Product.getAllCurrent());
    if (err) return err;
    return res.status(200).json(products);
  }

  async deactivateProduct({params: {id} }, res, next) {
    let [ err, product ] = await to(Product.deactivateProduct(id));
    if (err) return err;
    return res.status(200).json(products);
  }
}

module.exports = ProductController;
