const Product = require('../models/product');

module.exports.getAll = (req, res, next) => {
  Product.getAll()
  .then(products => res.status(200).json(products))
  .catch(error => next(error))
}

module.exports.getAllCurrent = (req, res, next) => {
  Product.getAllCurrent()
  .then(products => res.status(200).json(products))
  .catch(error => next(error))
}

module.exports.getOne = ({ params: {id} }, res, next) => {
  Product.getOne(id)
  .then(product => {
    res.status(200).json(product)
  })
  .catch(error => next(error))
}

module.exports.addProduct = ({body}, res, next) => {
  Product.addProduct(body)
  .then(product => res.status(200).json(product))
  .catch(error => next(error))
}

module.exports.deleteProduct = ({params: {id} }, res, next) => {
  Product.deleteProduct(id)
  .then(product => res.status(202).json(product))
  .catch(error => next(error))
}

module.exports.editProduct = ({body}, res, next) => {
  const id = body.id
  Product.editProduct(id, body)
  .then(product => res.status(200).json(product))
  .catch(error => next(error))
}
