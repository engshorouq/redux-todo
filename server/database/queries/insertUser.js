const connection = require("../config/connection");

exports.insertUser = (name, email, password) =>
  connection.query(
    "insert into users (name, email, password) values ($1, $2, $3) returning *",
    [name, email, password]
  );
