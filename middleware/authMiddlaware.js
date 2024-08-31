// authMiddleware.js
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.cookies.access_token;
  req.session = { user: null };

  if (token) {
    try {
      const data = jwt.verify(token, process.env.SECRET_JWT_KEY);
      req.session.user = data;
    } catch (err) {
      console.error("Invalid token:", err);
    }
  }

  next();
};

module.exports = authMiddleware;
