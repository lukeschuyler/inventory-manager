const { Router } = require('express');
const { search } = require('../controllers/AmazonController');
const router = Router();

// Authentication policy check
const { isAuthenticated } = require('../helpers/auth');

router.post('/search', isAuthenticated , search);

module.exports = router;
