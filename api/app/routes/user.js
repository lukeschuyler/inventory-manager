const { 
  getAll, 
  getOne, 
  deleteUser, 
  editUser,
  
  login, 
  signup, 
} = require('../controllers/userCtrl');

const { Router } = require('express');
const router = Router();

// Authentication policy check
const { isAuthenticated } = require('../helpers/auth');

// crud maybe for admins
router.get('/users', isAuthenticated, getAll);
router.get('/users/:id', isAuthenticated, getOne);
router.delete('/users/:id', isAuthenticated, deleteUser);
router.patch('/users', isAuthenticated, editUser);

// auth
router.post('/login', login);
router.post('/signup', signup);

module.exports = router;
