const router = require('express').Router();
const { analyzeDoc, getAnalysis } = require('../controllers/document.controller');
router.post('/analyze', analyzeDoc);
router.get('/:id', getAnalysis);
module.exports = router;
