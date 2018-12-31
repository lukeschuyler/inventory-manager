const { 
  getAll, 
  getOne, 
  login, 
  addItem, 
  deleteItem, 
  editItem 
} = require('../controllers/userCtrl');

const { Router } = require('express');
const router = Router();

router.get('/users', getAll);
router.get('/users/:id', getOne);
router.get('/login', login);
router.post('/users', addItem);
router.delete('/users/:id', deleteItem);
router.patch('/users', editItem);

module.exports = router;
