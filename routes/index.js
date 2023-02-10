var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
}); 
router.get('/project', function(req, res, next) {
  res.render('project', { title: 'Projects' });
});
router.get('/contactme', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});


module.exports = router;
