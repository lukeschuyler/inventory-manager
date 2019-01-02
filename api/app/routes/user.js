const { 
  getAll, 
  getOne, 
  login, 
  deleteUser, 
  editUser 
} = require('../controllers/userCtrl');

const { Router } = require('express');
const router = Router();

router.get('/users', getAll);
router.get('/users/:id', getOne);
router.delete('/users/:id', deleteUser);
router.patch('/users', editUser);

router.post('/login', login);

module.exports = router;
