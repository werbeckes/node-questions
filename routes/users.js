var express = require('express');
var router = express.Router();
var models  = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/api/users', function(req, res) {
  models.User.create({
    username: req.body.username
  }).then( () => { res.send('created') });
});

module.exports = router;
