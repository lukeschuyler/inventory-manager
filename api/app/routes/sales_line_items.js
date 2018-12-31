'use strict';

const { Router } = require('express');

const { getAll, getAllBySession, getOne, addItem, deleteItem, editItem } = require('../controllers/sales_line_itemCtrl');

const router = Router();

router.get('/sales_line_items', getAll);
router.get('/sales_line_items/:id', getOne);
router.get('/sales_line_items/from/:sales_session_id', getAllBySession);
router.post('/sales_line_items', addItem)
router.delete('/sales_line_items/:id', deleteItem)
router.patch('/sales_line_items', editItem)

module.exports = router;
