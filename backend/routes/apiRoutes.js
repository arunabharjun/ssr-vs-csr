const express = require('express');
const router = express.Router();
const { api } = require('../controllers/testApi');
const { readD1 } = require('../controllers/dataset1');
const { readD2 } = require('../controllers/dataset2');

router.get('/', api);
router.get('/dataset1', readD1);
router.get('/dataset2', readD2);

module.exports = router;
