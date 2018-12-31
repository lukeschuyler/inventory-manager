const InvSession = require('../models/inv_session')

module.exports.getAll = (req, res, next) => {
  InvSession.getAll()
  .then(sessions => res.status(200).json(sessions))
  .catch(error => next(error))
}

module.exports.getOne = ({ params: {id} }, res, next) => {
  InvSession.getOne(id)
  .then(session => res.status(200).json(session))
  .catch(error => next(error))
}

module.exports.addSession = ({body}, res, next) => {
  InvSession.addSession(body)
  .then(session => res.status(200).json(session))
  .catch(error => next(error))
}

module.exports.deleteSession = ({params: {id} }, res, next) => {
  InvSession.deleteSession(id)
  .then(session => res.status(202).json(session))
  .catch(error => next(error))
}

module.exports.editSession = ({body}, res, next) => {
  const id = body.id
  InvSession.editSession(id, body)
  .then(session => res.status(200).json(session))
  .catch(error => next(error))
}
