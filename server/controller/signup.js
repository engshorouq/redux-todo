const { hashSync } = require("bcryptjs");
const { sign } = require("jsonwebtoken");

const { insertUser } = require("../database/queries/insertUser");
const { selectUser } = require("../database/queries/selectUser");

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body.data;
    const { rows } = await selectUser(email);

    if (!rows[0]) {
      const hashedPassword = hashSync(password, 5);
      const { rows } = await insertUser(name, email, hashedPassword);
      const payload = { name: rows[0].name, id: rows[0].id };
      const jwt = sign(payload, process.env.SECRET);
      res.cookie("jwt", jwt, {
        maxAge: 1000 * 3600 * 24 * 30 * 2,
        httpOnly: true
      });
      res.status(201).send({ data: "signup success", error: null });
    } else {
      res.status(409).send({ data: null, error: "Email Already Exists" });
    }
  } catch {
    res.status(500).send({ data: null, error: "Internal Server Error" });
  }
};
