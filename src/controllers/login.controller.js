const { loginService } = require('../services');

const createLogin = async (req, res) => {
  const { email, password } = req.body;
  const { type, message } = await loginService.createLogin({ email, password });
  if (type) return res.status(400).json({ message });
  const token = message;
  return res.status(200).json({ token });
};

module.exports = {
  createLogin,
};