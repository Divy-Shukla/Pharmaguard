const express = require('express');
const upload = require('../config/multerConfig');
const { analyzeRisk } = require('../controllers/analyzeController');

const router = express.Router();

router.post('/', upload.single('vcfFile'), analyzeRisk);

module.exports = router;
