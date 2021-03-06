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

  /*
   * Get all sessions, sorted into type arrays
   */
  async getAll(req, res, next) {
    let [ err, sessions ] = await to(Session.getAll());
    if (err) return err;
    // console.log(sessions.toJSON());
    sessions = await this.sortSessions(sessions.toJSON());
    return res.status(200).json(sessions);
  }
  
  /*
   * Get all sessions of one type, common functionality
   */
  async getAllByTypeCommon(title, req, res, next) {
    // TODO : Move this logic to Session Type model 
    let err, type, sessions;
    [ err, type ] = await to(SessionType.forge({title}).fetch());
    if (err) return err;
    let typeId = type && type.id;

    [ err, sessions ] = await to(Session.getAllByType({ session_type_id: typeId }));
    if (err) return err;
    return res.status(200).json(sessions);
  }
  
  /*
   * Endpoints for each session type
   * Calls common code
   */
  getSales(req, res, next) {
    return this.getAllByTypeCommon('Sales', req, res, next);
  }

  getInventory(req, res, next) {
    return this.getAllByTypeCommon('Inventory', req, res, next);
  }

  getWaste(req, res, next) {
    return this.getAllByTypeCommon('Waste', req, res, next);
  }

  getReceiving(req, res, next) {
    return this.getAllByTypeCommon('Receiving', req, res, next);
  }

  /*
   * Helper
   * sorts sessions in four separate arrays for each type
   * @param array { sessions } 
   */
  sortSessions(sessions) {
    let waste = [],
        sales = [],
        inv = [],
        rec = [];
    for (let session of sessions) {
      if (!session.session_type) {
        console.log(session)
      }
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
