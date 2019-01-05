const Session = require('../models/Session');
const SessionType = require('../models/SessionType');

// CRUD
module.exports.getAll = (req, res, next) => {
  Session.getAll()
  .then(sessions => sortSessions(sessions.toJSON()))
  .then(sessions => res.status(200).json(sessions))
  .catch(error => next(error))
}

module.exports.getOne = (req, res, next) => {
  Session.getOne(id)
  .then(session => res.status(200).json(session))
  .catch(error => next(error))
}

module.exports.addSession = ({body}, res, next) => {
  Session.addSession(body)
  .then(session => res.status(200).json(session))
  .catch(error => next(error))
}

module.exports.deleteSession = ({params: {id} }, res, next) => {
  Session.deleteSession(id)
  .then(session => res.status(202).json(session))
  .catch(error => next(error))
}

module.exports.editSession = ({body}, res, next) => {
  const id = body.id
  Session.editSession(id, body)
  .then(session => res.status(200).json(session))
  .catch(error => next(error))
}

// Specific Types
module.exports.getWaste = (req, res, next) => {
  Session.getAllByType({ session_type_id: 3 })
  .then(sessions => res.status(200).json(sessions))
  .catch(error => next(error))
}

module.exports.getSales = (req, res, next) => {
  Session.getAllByType({ session_type_id: 1 })
  .then(sessions => res.status(200).json(sessions))
  .catch(error => next(error))
}

module.exports.getInventory = (req, res, next) => {
  Session.getAllByType({ session_type_id: 2 })
  .then(sessions => res.status(200).json(sessions))
  .catch(error => next(error))
}

module.exports.getReceiving = (req, res, next) => {
  Session.getAllByType({ session_type_id: 4 })
  .then(sessions => res.status(200).json(sessions))
  .catch(error => next(error))
}


const sortSessions = sessions => {
  let waste = [],
      sales = [],
      inv = [],
      rec = [];

  for (let session of sessions) {
    switch(session.session_type.title) {
      case 'Sales':
        sales.push(session);
        break;
      case 'Waste':
        waste.push(session);
        break;
      case 'Inventory':
        inv.push(session);
        break;
      case 'Receiving':
        rec.push(session);
        break;
    }
  }
  
  return { waste, sales, inv, rec };
}
