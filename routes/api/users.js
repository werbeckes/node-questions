var express = require('express');
var models  = require('../../models');

var router = express.Router();

router.get('/users', (req, res) => {
  models.User.findAll({
    attributes: ['username','id']
  }).then( (users) => {
    res.send(users);
  });
});

router.post('/users', (req, res) => {
  models.User.create({
    username: req.body.username
  }).then( () => {
    res.sendStatus(201);
  });
});

module.exports = router;
