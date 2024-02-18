const express = require('express');

const {
  getHomePage,
  getMaxymTsyganokPage,
  getOleksandrZahrebelnyiPage
} = require('../controllers/info');

const router = express.Router();

router.get('/', getHomePage);

router.get('/max-1', getMaxymTsyganokPage);

router.get('/sasha', getOleksandrZahrebelnyiPage);

module.exports = router;
