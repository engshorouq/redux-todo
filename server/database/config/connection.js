require('dotenv').config();

const {Pool} = require('pg');

const dbUrl = process.env.BD_URL;

const option = {
    connectionString: dbUrl,
    ssl: true
}


module.exports = new Pool(option)