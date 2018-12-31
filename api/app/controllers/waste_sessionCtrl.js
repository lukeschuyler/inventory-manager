'use strict'

const { bookshelf } = require('../db/database')
const WasteSession = require('../models/waste_session')

module.exports.getAll = (req, res, next) => {
  WasteSession.getAll()
  .then(sessions => res.status(200).json(sessions))
  .catch(error => next(error))
}

module.exports.getOne = ({ params: {id} }, res, next) => {
  WasteSession.getOne(id)
  .then(session => res.status(200).json(session))
  .catch(error => next(error))
}

module.exports.addSession = ({body}, res, next) => {
  WasteSession.addSession(body)
  .then(session => res.status(200).json(session))
  .catch(error => next(error))
}

module.exports.deleteSession = ({params: {id} }, res, next) => {
  WasteSession.deleteSession(id)
  .then(session => res.status(202).json(session))
  .catch(error => next(error))
}

module.exports.editSession = ({body}, res, next) => {
  const id = body.id
  WasteSession.editSession(id, body)
  .then(session => res.status(200).json(session))
  .catch(error => next(error))
}
