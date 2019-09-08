const connection = require('../config/connection');

exports.selectPosts = () => connection.query('select posts.title, posts.body from posts')

// select posts.title, posts.body, users.name from posts inner join users on users.id = posts.user_id