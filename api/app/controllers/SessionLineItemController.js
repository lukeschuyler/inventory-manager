const SessionLineItem = require('../models/SessionLineItem');

class SessionLineItemController {

  getAll(req, res, next) {
    SessionLineItem.getAll()
    .then(items => res.status(200).json(items))
    .catch(error => next(error))
  }

  getAllBySession({ params: { id } }, res, next) {
    SessionLineItem.getAllBySession(id)
    .then(items => res.status(200).json(items))
    .catch(error => next(error))
  }

  getOne({ params: {id} }, res, next) {
    SessionLineItem.getOne(id)
    .then(item => res.status(200).json(item))
    .catch(error => next(error))
  }

  addItem({body}, res, next) {
    SessionLineItem.addItem(body.lineItem)
    .then(item => res.status(200).json(item))
    .catch(error => next(error))
  }

  deleteItem({params: {id} }, res, next) {
    SessionLineItem.deleteItem(id)
    .then(item => res.status(202).json(item))
    .catch(error => next(error))
  }

  editItem({body}, res, next) {
    const id = body.id
    SessionLineItem.editItem(id, body)
    .then(item => res.status(200).json(item))
    .catch(error => next(error))
  }
  
}

module.exports = SessionLineItemController;
