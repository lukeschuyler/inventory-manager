const Session = require('../models/Session');
const SessionType = require('../models/SessionType');
const Controller = require('./Controller');

class SessionController extends Controller {

  getWaste(req, res, next) {
    Session.getAllByType({ session_type_id: 3 })
    .then(sessions => res.status(200).json(sessions))
    .catch(error => next(error))
  }

  getSales(req, res, next) {
    Session.getAllByType({ session_type_id: 1 })
    .then(sessions => res.status(200).json(sessions))
    .catch(error => next(error))
  }

  getInventory(req, res, next) {
    Session.getAllByType({ session_type_id: 2 })
    .then(sessions => res.status(200).json(sessions))
    .catch(error => next(error))
  }

  getReceiving(req, res, next) {
    Session.getAllByType({ session_type_id: 4 })
    .then(sessions => res.status(200).json(sessions))
    .catch(error => next(error))
  }

  getAll(req, res, next) {
    Session.getAll()
    .then(sessions => sortSessions(sessions.toJSON()))
    .then(sessions => res.status(200).json(sessions))
    .catch(error => next(error))
  }

  sortSessions(sessions) {
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
}
