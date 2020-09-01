var express = require('express');
const db = require('../db/models');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('auth');
});

router.post('/', function(req, res, next) {
  db.User.create({firstName: req.body.name }).then((res) => console.log(res))
  res.send('auth');
});

module.exports = router;
