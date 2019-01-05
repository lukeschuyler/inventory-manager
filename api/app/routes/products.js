const { Router } = require('express');
const router = Router();

const ProductController = require('../controllers/ProductController');

// Actions
const { 
  getAll, getAllCurrent, getOne, 
  create, destroy, deleteProduct, update 
} = new ProductController();

// Authentication policy check
const { isAuthenticated } = require('../helpers/auth');

router.get('/products/all', isAuthenticated, getAll);
router.get('/products', isAuthenticated, getAllCurrent);
router.get('/products/:id', isAuthenticated, getOne);
router.post('/products', isAuthenticated, create);
router.delete('/products/:id', isAuthenticated, deleteProduct);
router.patch('/products', isAuthenticated, update);

module.exports = router;
