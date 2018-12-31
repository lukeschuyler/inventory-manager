'use strict'

const { bookshelf } = require('../db/database')
const RecSession = require('../models/rec_session')

module.exports.getAll = (req, res, next) => {
  RecSession.getAll()
  .then(sessions => res.status(200).json(sessions))
  .catch(error => next(error))
}

module.exports.getOne = ({ params: {id} }, res, next) => {
  RecSession.getOne(id)
  .then(session => res.status(200).json(session))
  .catch(error => next(error))
}

module.exports.addSession = ({body}, res, next) => {
  RecSession.addSession(body)
  .then(session => res.status(200).json(session))
  .catch(error => next(error))
}

module.exports.deleteSession = ({params: {id} }, res, next) => {
  RecSession.deleteSession(id)
  .then(session => res.status(202).json(session))
  .catch(error => next(error))
}

module.exports.editSession = ({body}, res, next) => {
  const id = body.id
  RecSession.editSession(id, body)
  .then(session => res.status(200).json(session))
  .catch(error => next(error))
}
