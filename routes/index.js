const express = require('express');

const {
  getHomePage,
  getMaxymTsyganokPage,
  getSofiiaKovalPage
} = require('../controllers/info');

const router = express.Router();

router.get('/', getHomePage);

router.get('/max-1', getMaxymTsyganokPage);

router.get('/sofia', getSofiiaKovalPage)

module.exports = router;
