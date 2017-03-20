var express = require('express');
var models = require('../../models');

var router = express.Router();
// TODO: use `router.use`, but not specific to just user_id
// app.params('user_id', (req, res, next) => {
//   var user_id = req.params.user_id;

//   if (user_id) {
//     req.user_id = user_id;
//     next();
//   } else {
//     res.status('422').json('Invalid user_id');
//   }
// });

router.get('/users/:user_id/questions', (req, res) => {
  models.Question.findAll({
    attributes: ['user_id', 'id', 'text']
  }).then ( (questions) => {
    res.status(200).send(questions);
  });
});

router.post('/users/:user_id/questions', (req, res) => {
  models.Question.create({
    text: req.body.text,
    user_id: req.params.user_id
  }).then( () => {
    res.sendStatus(201);
  });
});

module.exports = router;
