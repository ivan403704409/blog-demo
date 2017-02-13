// const connection = require('./init.js')
const moment = require('moment')
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'blog'
});


exports.getArticleList = () => {
	return new Promise((resolve, reject) => {
		connection.query('select * from article left join user on article.uid = user.id order by article.utime', (err, res, fields) => {
			if (err){
				reject(err)
				return 
			}
			res.forEach(val => {
				val.utime = moment(val.utime).format('YYYY-MM-DD HH:mm:SS')
			})
			resolve(res)
		})
	})
	
}