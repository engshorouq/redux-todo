require('dotenv').config();
const express = require("express");
const cookieParser = require('cookie-parser');

const controller = require('./controller');

const app = express();

app.set("PORT", process.env.PORT || 4400);

app.use(express.json());
app.use(cookieParser())

app.use('/api/v1', controller)

module.exports = app;
