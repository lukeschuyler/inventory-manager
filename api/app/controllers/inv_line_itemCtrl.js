const { bookshelf } = require('../db/database')
const InvLineItem = require('../models/inv_line_item')

module.exports.getAll = (req, res, next) => {
  InvLineItem.getAll()
  .then(items => res.status(200).json(items))
  .catch(error => next(error))
}

module.exports.getAllBySession = ({ params: {inventory_session_id} }, res, next) => {
  InvLineItem.getAllBySession(inventory_session_id)
  .then(items => res.status(200).json(items))
  .catch(error => next(error))
}

module.exports.getOne = ({ params: {id} }, res, next) => {
  InvLineItem.getOne(id)
  .then(item => res.status(200).json(item))
  .catch(error => next(error))
}

module.exports.addItem = ({body}, res, next) => {
  InvLineItem.addItem(body.lineItem)
  .then(item => res.status(200).json(item))
  .catch(error => next(error))
}

module.exports.deleteItem = ({params: {id} }, res, next) => {
  InvLineItem.deleteItem(id)
  .then(item => res.status(202).json(item))
  .catch(error => next(error))
}

module.exports.editItem = ({body}, res, next) => {
  const id = body.id
  InvLineItem.editItem(id, body)
  .then(item => res.status(200).json(item))
  .catch(error => next(error))
}
