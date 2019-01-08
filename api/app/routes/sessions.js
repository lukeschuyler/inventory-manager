const { Router } = require('express');
const router = Router();

const SessionController = require('../controllers/SessionController');

// Actions
const { 
  getInventory, getWaste, getReceiving, getSales,
  getOne, create, destroy, update, getAll
} = new SessionController();

// Authentication policy check
const { isAuthenticated } = require('../helpers/auth');

// All Sessions (General)
router.get('/all_sessions', isAuthenticated, getAll);
router.get('/sessions/:id', isAuthenticated, getOne);
router.post('/sessions', isAuthenticated, create);
router.delete('/sessions/:id', isAuthenticated, destroy);
router.patch('/sessions', isAuthenticated, update);

// Inventory
router.get('/inv_sessions', isAuthenticated, getInventory);

// Receiving
router.get('/rec_sessions', isAuthenticated, getReceiving);

// Waste
router.get('/waste_sessions', isAuthenticated, getWaste);

// Sales
router.get('/sales_sessions', isAuthenticated, getSales);


module.exports = router;
