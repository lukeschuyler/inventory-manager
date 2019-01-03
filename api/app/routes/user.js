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

router.get('/users', getAll);
router.get('/users/:id', getOne);
router.delete('/users/:id', deleteUser);
router.patch('/users', editUser);

router.post('/login', login);
router.post('/signup', signup);

module.exports = router;
