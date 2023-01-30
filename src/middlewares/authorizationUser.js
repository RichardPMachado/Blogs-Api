const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  try {
    const payload = jwt.verify(authorization, process.env.JWT_SECRET);
    console.log(payload);
    req.user = payload;
    next();
  } catch (err) {
    err.statusCode = 401;
    console.log(err.message);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};