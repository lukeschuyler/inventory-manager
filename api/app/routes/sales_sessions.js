'use strict';

const { Router } = require('express');

const { getAll, getOne, addSession, deleteSession, editSession } = require('../controllers/sales_sessionCtrl');

const router = Router();

router.get('/sales_sessions', getAll);
router.get('/sales_sessions/:id', getOne);
router.post('/sales_sessions', addSession)
router.delete('/sales_sessions/:id', deleteSession)
router.patch('/sales_sessions', editSession)

module.exports = router;
