const express = require('express');

const {
  getHomePage,
  getMaxymTsyganokPage,
  getMaxymPoplavskiyPage
} = require('../controllers/info');

const router = express.Router();

router.get('/', getHomePage);

router.get('/max-1', getMaxymTsyganokPage);

router.get('/max-2', getMaxymPoplavskiyPage);

module.exports = router;
