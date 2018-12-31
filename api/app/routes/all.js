const { Router } = require('express');
const { getAll } = require('../controllers/allCtrl');

const router = Router();
router.get('/all_sessions', getAll);


module.exports = router;
