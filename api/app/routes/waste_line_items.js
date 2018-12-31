'use strict';

const { Router } = require('express');

const { getAll, getAllBySession, getOne, addItem, deleteItem, editItem } = require('../controllers/waste_line_itemCtrl');

const router = Router();

router.get('/waste_line_items', getAll);
router.get('/waste_line_items/:id', getOne);
router.get('/waste_line_items/from/:waste_session_id', getAllBySession);
router.post('/waste_line_items', addItem)
router.delete('/waste_line_items/:id', deleteItem)
router.patch('/waste_line_items', editItem)

module.exports = router;
