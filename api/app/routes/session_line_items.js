const { Router } = require('express');
const router = Router();

SLIController = require('../controllers/SessionLineItemController');

const { 
  getAll, getAllBySession, getOne, 
  addItem, deleteItem, editItem 
} = new SLIController();

console.log(getAll)

const { isAuthenticated } = require('../helpers/auth');

router.get('/line_items/:id', isAuthenticated, getOne);
router.get('/line_items/from/:session_id', isAuthenticated, getAllBySession);
router.post('/line_items', isAuthenticated, addItem);
router.delete('/line_items/:id', isAuthenticated, deleteItem);
router.patch('/line_items', isAuthenticated, editItem);

module.exports = router;
