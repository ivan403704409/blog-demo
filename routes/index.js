var express = require('express');
var router = express.Router();
var getArticleList = require('../model/article.js').getArticleList

/* GET home page. */
router.get('/', function(req, res, next) {
	getArticleList().then(articles => {
		res.render('index', { title: '文章列表', articles });
	})
  
});

module.exports = router;
