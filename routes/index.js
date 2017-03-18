var express = require('express');
var models = require('../models');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Working Express' });
});

module.exports = router;
