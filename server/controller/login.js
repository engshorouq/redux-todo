const { selectUser } = require("../database/queries/selectUser");
const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");

exports.login = async (req, res) => {
  const { email, password } = req.body.data;
  try {
    const { rows } = await selectUser(email);
    if (rows[0]) {
      const { id, name, password: hashPassword } = rows[0];
      const success = await compare(password, hashPassword);
      if (success) {
        const jwt = await sign({ name, id }, process.env.SECRET);
        res.cookie("jwt", jwt, {
          maxAge: 1000 * 3600 * 24 * 30 * 2,
          httpOnly: true
        });
        res.send({ data: "login success", error: null });
      } else {
      res.status(401).send({ data: "", error: "Email or password wrong" });
      }
    }
  } catch {
    res.status(500).send({ data: '', error: 'Internal server Error' });
  }
};
