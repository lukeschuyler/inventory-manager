const { Router } = require('express');
const router = Router();

router.use(require('./user');)
router.use(require('./inv_line_items'));
router.use(require('./inv_sessions'));
router.use(require('./products'));
router.use(require('./waste_sessions'));
router.use(require('./waste_line_items'));
router.use(require('./sales_sessions'));
router.use(require('./sales_line_items'));
router.use(require('./rec_sessions'));
router.use(require('./rec_line_items'));
router.use(require('./all'));
router.use(require('./amazon'));

module.exports = router;
