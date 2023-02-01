const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.TOKEN_SECRET || 'secretJWT';
module.exports = (token) => {
  if (!token) {
    throw new Error('Undefined Token');
  }

  try {
    const result = jwt.verify(token, TOKEN_SECRET);
    return result;
  } catch (err) {
    return null;
  }
};