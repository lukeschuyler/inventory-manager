const Product = require('../models/Product');
const Controller = require('./Controller');

class ProductController extends Controller {
  constructor() {
    super(Product);
  }
  getAllCurrent(req, res, next) {
    Product.getAllCurrent()
    .then(products => res.status(200).json(products))
    .catch(error => next(error))
  }

  deleteProduct({params: {id} }, res, next) {
    Product.deleteProduct(id)
    .then(product => res.status(202).json(product))
    .catch(error => next(error))
  }
}

module.exports = ProductController;
