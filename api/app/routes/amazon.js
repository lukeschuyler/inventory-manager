const { Router } = require('express');
const { search } = require('../controllers/amazonCtrl');
const router = Router();

router.post('/search', search);

module.exports = router;
