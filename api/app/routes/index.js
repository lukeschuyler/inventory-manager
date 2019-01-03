const { Router } = require('express');
const router = Router();

router.use(require('./user'));
router.use(require('./sessions'));
router.use(require('./products'));
router.use(require('./session_line_items'));
router.use(require('./amazon'));

module.exports = router;
