const jwt = require("jsonwebtoken");

module.exports = {
  authentication: (req, res, next) => {
    const bearerHeader = req.headers.authorization;
    // console.log(bearerHeader)
    let token;
    if (bearerHeader) {
      token = bearerHeader.split(" ")[1];
    }

    if (!token) {
      return res.sendStatus(403);
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }

      req.token = user;
      next();
    });
  },
};
