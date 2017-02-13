const connection = require('../db/connect.js')
const moment = require('moment')
exports.getArticleList = () => {
	return new Promise((resolve, reject) => {
		let query = 'select * from article left join user on article.uid = user.id order by article.utime'
		connection.query(query, (err, res, fields) => {
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