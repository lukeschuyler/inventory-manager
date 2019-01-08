const { Router } = require('express');
const router = Router();

const SLIController = require('../controllers/SessionLineItemController');

const { 
  getAll, getAllBySession, getOne, 
  create, destroy, update 
} = new SLIController();

const { isAuthenticated } = require('../helpers/auth');

router.get('/line_items/:id', isAuthenticated, getOne);
router.get('/line_items/from/:session_id', isAuthenticated, getAllBySession);
router.post('/line_items', isAuthenticated, create);
router.delete('/line_items/:id', isAuthenticated, destroy);
router.patch('/line_items', isAuthenticated, update);

module.exports = router;
