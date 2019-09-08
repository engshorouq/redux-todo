const express = require("express");

const { getPosts } = require("./getPosts");
const { postPost } = require("./postPost");
const { login } = require('./login');
const { signup } = require('./signup');
const { checkCookie } = require('./checkCookie');

const router = express.Router();

router.route("/login").post(login);
router.route("/signup").post(signup);

router.route('/check').get(checkCookie);

router
  .route("/posts")
  .get(getPosts)
  .post(postPost);

module.exports = router;
