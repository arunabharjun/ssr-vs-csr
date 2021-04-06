const express = require('express');
const router = express.Router();
const { api } = require('../controllers/testApi');

router.get('/', api);

module.exports = router;
