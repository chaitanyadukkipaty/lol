var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { list: ['Chaitanya','is', 'awesome','period'] });
});

module.exports = router;
