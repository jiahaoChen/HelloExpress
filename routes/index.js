var express = require('express');
var router = express.Router();
var blogEngine = require('../views/blog');

router.get('/', function(req, res) {
   res.render('index',{title:"Newly Article", entries:blogEngine.getBlogEntries()});
});
router.get('/about', function(req, res) {
   res.render('about', {title:"About Me"});
});

router.get('/article/:id', function(req, res) {
    var entry = blogEngine.getBlogEntry(req.params.id);
    console.log(entry);
    res.render('article',{title:entry.title, blog:'abc', blog:entry});
});




module.exports = router;