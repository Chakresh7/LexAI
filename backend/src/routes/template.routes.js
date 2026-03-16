const router = require('express').Router();
const { generateDoc, getTemplates } = require('../controllers/template.controller');
router.post('/generate', generateDoc);
router.get('/list', getTemplates);
module.exports = router;
