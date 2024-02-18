const express = require('express');

const {
  getHomePage,
  getMaxymTsyganokPage
} = require('../controllers/info');

const router = express.Router();

router.get('/', getHomePage);

router.get('/max-1', getMaxymTsyganokPage);

module.exports = router;
