var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('yves', { title: 'yves ebaa' });
});

module.exports = router;
