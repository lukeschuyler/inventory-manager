'use strict';

const { Router } = require('express');

const { getAll, getAllBySession, getOne, addItem, deleteItem, editItem } = require('../controllers/rec_line_itemCtrl');

const router = Router();

router.get('/rec_line_items', getAll);
router.get('/rec_line_items/:id', getOne);
router.get('/rec_line_items/from/:receiving_session_id', getAllBySession);
router.post('/rec_line_items', addItem)
router.delete('/rec_line_items/:id', deleteItem)
router.patch('/rec_line_items', editItem)

module.exports = router;
