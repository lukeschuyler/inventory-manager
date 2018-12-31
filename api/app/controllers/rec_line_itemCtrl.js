const RecLineItem = require('../models/rec_line_item')
const Product = require('../models/product.js')

module.exports.getAll = (req, res, next) => {
  RecLineItem.getAll()
  .then(items => res.status(200).json(items))
  .catch(error => next(error))
}

module.exports.getAllBySession = ({ params: {receiving_session_id} }, res, next) => {
  RecLineItem.getAllBySession(receiving_session_id)
  .then(items => res.status(200).json(items))
  .catch(error => next(error))
}

module.exports.getOne = ({ params: {id} }, res, next) => {
  RecLineItem.getOne(id)
  .then(item => res.status(200).json(item))
  .catch(error => next(error))
}

module.exports.addItem = ({body}, res, next) => {
  let newQuantity = body.qty + body.lineItem.quantity
  newQuantity < 0 ? newQuantity = 0 : newQuantity = newQuantity
  RecLineItem.addItem(body)
  .then(res => {
   return Product.editProduct(body.lineItem.product_id, {current_qty: newQuantity})
  })
  .then(item => res.status(200).json(item))
  .catch(error => next(error))
}

module.exports.deleteItem = ({params: {id} }, res, next) => {
  RecLineItem.deleteItem(id)
  .then(item => res.status(202).json(item))
  .catch(error => next(error))
}

module.exports.editItem = ({body}, res, next) => {
  const id = body.id
  RecLineItem.editItem(id, body)
  .then(item => res.status(200).json(item))
  .catch(error => next(error))
}
