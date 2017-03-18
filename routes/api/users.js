var express = require('express');
var models  = require('../../models');

var router = express.Router();

router.get('/', (req, res) => {
  models.User.findAll({
    attributes: ['username','id']
  }).then( (users) => {
    res.send(users);
  });
});

router.post('/', (req, res) => {
  models.User.create({
    username: req.body.username
  }).then( () => { res.send('created') });
});

module.exports = router;
