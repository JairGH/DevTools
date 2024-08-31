const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    return res.status(403).send("Access denied. No token provided.");
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_JWT_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).send("Invalid token.");
  }
};

module.exports = authMiddleware;
