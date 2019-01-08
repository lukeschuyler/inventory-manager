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
router.post('/sessions', isAuthenticated, create);
router.delete('/sessions/:id', isAuthenticated, destroy);
router.patch('/sessions', isAuthenticated, update);

// Inventory
router.get('/inv_sessions', isAuthenticated, getInventory);
router.get('/inv_sessions/:id', isAuthenticated, getOne);

// Receiving
router.get('/rec_sessions', isAuthenticated, getReceiving);
router.get('/rec_sessions/:id', isAuthenticated, getOne);

// Waste
router.get('/waste_sessions', isAuthenticated, getWaste);
router.get('/waste_sessions/:id', isAuthenticated, getOne);

// Sales
router.get('/sales_sessions', isAuthenticated, getSales);
router.get('/sales_sessions/:id', isAuthenticated, getOne);


module.exports = router;
