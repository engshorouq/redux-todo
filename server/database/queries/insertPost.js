const connection = require('../config/connection');

exports.insertPost = (title, body) => connection.query('insert into posts (title, body) values ($1, $2) returning *', [title, body])