var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/technologies', function(req, res, next) {
  res.render('technologies');
});


router.get('/qui-suis-je', function(req, res, next) {
  res.render('qui');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.get('/parcours', function(req, res, next) {
  res.render('parcours');
});
module.exports = router;
