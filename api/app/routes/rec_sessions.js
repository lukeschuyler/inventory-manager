'use strict';

const { Router } = require('express');

const { getAll, getOne, addSession, deleteSession, editSession } = require('../controllers/rec_sessionCtrl');

const router = Router();

router.get('/rec_sessions', getAll);
router.get('/rec_sessions/:id', getOne);
router.post('/rec_sessions', addSession)
router.delete('/rec_sessions/:id', deleteSession)
router.patch('/rec_sessions', editSession)

module.exports = router;
