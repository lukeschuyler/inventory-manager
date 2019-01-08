const UserController = require('../controllers/UserController');

const { 
  getAll, 
  getOne, 
  destroy, 
  update,
  
  login, 
  signup, 
} = new UserController();

const { Router } = require('express');
const router = Router();

// Authentication policy check
const { isAuthenticated } = require('../helpers/auth');

// crud maybe for admins
router.get('/users', isAuthenticated, getAll);
router.get('/users/:id', isAuthenticated, getOne);
router.delete('/users/:id', isAuthenticated, destroy);
router.patch('/users', isAuthenticated, update);

// auth
router.post('/login', login);
router.post('/signup', signup);

// the logic for this endpoint lies 100% in the "isAuthenticated" middleware function
// therefore if it makes it through, just send on a success to client
router.post('/check-token', isAuthenticated, (req, res) => res.status(200).json({ message: 'success' }));

module.exports = router;
