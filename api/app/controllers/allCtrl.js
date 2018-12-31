'use strict'

const { bookshelf } = require('../db/database')

const InvSession = require('../models/inv_session')
const RecSession = require('../models/rec_session')
const SalesSession = require('../models/sales_session')
const WasteSession = require('../models/waste_session')

module.exports.getAll = (req, res, next) => {
  Promise.all([InvSession.getAll(), RecSession.getAll(), SalesSession.getAll(), WasteSession.getAll()])
  .then(([inv, rec, sales, waste]) => {
    let sessions = { inv, rec, sales, waste }
    res.status(200).json(sessions)
  }) 
  .catch(error => next(error))
}
