const Session = require('../models/Session');
const SessionType = require('../models/SessionType');
const Controller = require('./Controller');


class SessionController extends Controller {

  getWaste(req, res, next) {
    return this.getAllByTypeCommon(3);
  }

  getSales(req, res, next) {
    return this.getAllByTypeCommon(1);
  }

  getInventory(req, res, next) {
    return this.getAllByTypeCommon(2);
  }

  getReceiving(req, res, next) {
    return this.getAllByTypeCommon(4);
  }

  async getAll(req, res, next) {
    let [ err, sessions ] = await to(Session.getAll());
    if (err) return err;
    sessions = await this.sortSessions(sessions.toJSON());
    return res.status(200).json(sessions);
  }

  async getAllByTypeCommon(type_id) {
    let [ err, sessions ] = await to(Session.getAllByType({ session_type_id: type_id }));
    if (err) return err;
    return res.status(200).json(sessions);
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

module.exports = SessionController;
