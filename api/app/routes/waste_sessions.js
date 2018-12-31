// waste endpoint functions
const { 
  getAll, 
  getOne, 
  addSession,   
  deleteSession, 
  editSession 
} = require('../controllers/waste_sessionCtrl');

const { Router } = require('express');
const router = Router();

router.get('/waste_sessions', getAll);
router.get('/waste_sessions/:id', getOne);
router.post('/waste_sessions', addSession)
router.delete('/waste_sessions/:id', deleteSession)
router.patch('/waste_sessions', editSession)

module.exports = router;
