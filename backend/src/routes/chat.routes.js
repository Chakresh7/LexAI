const router = require('express').Router();
const { sendMessage, getHistory, clearHistory } = require('../controllers/chat.controller');
router.post('/message', sendMessage);
router.get('/history/:sessionId', getHistory);
router.delete('/history/:sessionId', clearHistory);
module.exports = router;
