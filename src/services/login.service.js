const { User } = require('../models');
const generateToken = require('../token/generateToken');

const createLogin = async ({ email }) => {
  const user = await User.findOne({ where: { email } });
  if (!user) return { type: 'INVALID_VALUE', message: 'Invalid fields' };

  const createdUser = await User.findOne({ where: { email } });

  return { type: null, message: generateToken(createdUser.dataValues) };
};

module.exports = {
  createLogin,
};
