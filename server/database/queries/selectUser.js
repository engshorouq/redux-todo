const connection = require("../config/connection");

exports.selectUser = email =>
  connection.query("select * from users where email = $1", [email]);
