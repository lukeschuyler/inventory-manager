const { Router } = require('express');
const { getAll, getOne, addSession, deleteSession, editSession } = require('../controllers/sales_sessionCtrl');
const router = Router();
const { isAuthenticated } = require('../helpers/auth');

router.get('/sales_sessions', isAuthenticated, getAll);
router.get('/sales_sessions/:id', isAuthenticated, getOne);
router.post('/sales_sessions', isAuthenticated, addSession)
router.delete('/sales_sessions/:id', isAuthenticated, deleteSession)
router.patch('/sales_sessions', isAuthenticated, editSession)

module.exports = router;
