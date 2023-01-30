const { createUserValidation } = require('./validations/validateInputs');
const { User } = require('../models');
const generateToken = require('../token/generateToken');

const createUser = async ({ displayName, email, password, image }) => {
  const error = createUserValidation({ displayName, email, password });
  if (error.type) return error;
    
  const user = await User.findOne({ where: { email } });
  if (user) return { type: 'EXISTING_USER_CONFLICT', message: 'User already registered' };

  await User.create({ displayName, email, password, image });

  return { type: null, message: generateToken({ email }) };
};

const getAllUsers = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  console.log(users);
  return users;
};

const getUserById = async (id) => {
  const user = await User.findOne({
    where: { id },
    attributes: { exclude: ['password'] },
  });
  if (!user) return { type: 'USER_NOT_FOUND', message: 'User does not exist' };
  return { type: null, message: user };
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};
