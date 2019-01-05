const { Router } = require('express');
const router = Router();

const ProductController = require('../controllers/ProductController');

// Actions
const { 
  getAll, getAllCurrent, getOne, 
  addProduct, deleteProduct, editProduct 
} = new ProductController();

// Authentication policy check
const { isAuthenticated } = require('../helpers/auth');

router.get('/products/all', isAuthenticated, getAll);
router.get('/products', isAuthenticated, getAllCurrent);
router.get('/products/:id', isAuthenticated, getOne);
router.post('/products', isAuthenticated, addProduct)
router.delete('/products/:id', isAuthenticated, deleteProduct)
router.patch('/products', isAuthenticated, editProduct)

module.exports = router;
