const Session = require('../models/Session');
const SessionType = require('../models/SessionType');
const Controller = require('./Controller');

/*
 * SessionController
 */

class SessionController extends Controller {
  constructor() {
    super(Session);
    this.getSales =  this.getSales.bind(this);
    this.getInventory =  this.getInventory.bind(this);
    this.getReceiving =  this.getReceiving.bind(this);
    this.getWaste =  this.getWaste.bind(this);
  }

  async getAll(req, res, next) {
    let [ err, sessions ] = await to(Session.getAll());
    if (err) return err;
    sessions = await this.sortSessions(sessions.toJSON());
    return res.status(200).json(sessions);
  }
  
  async getAllByTypeCommon(type_id, req, res, next) {
    let [ err, sessions ] = await to(Session.getAllByType({ session_type_id: type_id }));
    if (err) return err;
    return res.status(200).json(sessions);
  }
  
  getSales(req, res, next) {
    return this.getAllByTypeCommon(5, req, res, next);
  }

  getInventory(req, res, next) {
    return this.getAllByTypeCommon(6, req, res, next);
  }

  getWaste(req, res, next) {
    return this.getAllByTypeCommon(7, req, res, next);
  }

  getReceiving(req, res, next) {
    return this.getAllByTypeCommon(8, req, res, next);
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
