const Controller = require('./Controller');
const SessionLineItem = require('../models/SessionLineItem');


/*
 * SessionLineItemController
 */

class SessionLineItemController extends Controller {
  async getAllBySession({ params: { id } }, res, next) {
    let [ err, items ] = await to(SessionLineItem.getAllBySession(id));
    if (err) return err;
    return res.status(200).json(items);
  }
}

module.exports = SessionLineItemController;
