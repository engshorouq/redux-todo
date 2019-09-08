const { verify } = require("jsonwebtoken");

exports.checkCookie = async (req, res) => {
  try {
    const { jwt } = req.cookies;
    if (jwt) {
      const payload = await verify(jwt, process.env.SECRET);
      res.send({ data: true });
    } else {
      res.send({ data: false });
    }
  } catch {
    res.send({ data: false });
  }
};
