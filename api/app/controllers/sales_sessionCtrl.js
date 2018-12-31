'use strict';

const SalesSession = require('../models/sales_session');

module.exports.getAll = (req, res, next) => {
  SalesSession.getAll()
  .then(sessions => res.status(200).json(sessions))
  .catch(error => next(error));
};

module.exports.getOne = ({ params: {id} }, res, next) => {
  SalesSession.getOne(id)
  .then(session => res.status(200).json(session))
  .catch(error => next(error));
};

module.exports.addSession = ({body}, res, next) => {
  SalesSession.addSession(body)
  .then(session => res.status(200).json(session))
  .catch(error => next(error));
};

module.exports.deleteSession = ({params: {id} }, res, next) => {
  SalesSession.deleteSession(id)
  .then(session => res.status(202).json(session))
  .catch(error => next(error));
};

module.exports.editSession = ({body}, res, next) => {
  const id = body.id;
  SalesSession.editSession(id, body)
  .then(session => res.status(200).json(session))
  .catch(error => next(error));
};
