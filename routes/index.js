const express = require('express');

const {
  getHomePage,
  getMaxymTsyganokPage,
  getMaxymPoplavskiyPage,
  getOleksandrZahrebelnyiPage,
  getSofiiaKovalPage
} = require('../controllers/info');

const router = express.Router();

router.get('/', getHomePage);

router.get('/max-1', getMaxymTsyganokPage);
router.get('/max-2', getMaxymPoplavskiyPage);
router.get('/sasha', getOleksandrZahrebelnyiPage);
router.get('/sofia', getSofiiaKovalPage);
module.exports = router;
