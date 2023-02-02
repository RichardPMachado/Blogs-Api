const { createUserValidation } = require('./validations/validateInputs');
const { User } = require('../models');
const generateToken = require('../token/generateToken');
const decodeToken = require('../token/decodeToken');

const createUser = async ({ displayName, email, password, image }) => {
  const error = createUserValidation({ displayName, email, password });
  if (error.type) return error;
    
  const user = await User.findOne({ where: { email } });
  if (user) return { type: 'EXISTING_USER_CONFLICT', message: 'User already registered' };

  await User.create({ displayName, email, password, image });

  const createdUser = await User.findOne({
    where: { email, password } });
  return { type: null, message: generateToken(createdUser.dataValues) };
};

const getAllUsers = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return users;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });
  if (!user) return { type: 'USER_NOT_FOUND', message: 'User does not exist' };
  delete user.password;
  return { type: null, message: user };
};

const removeUser = async (authorization) => {
  const user = await decodeToken(authorization);
  await User.destroy({ where: { id: user.id } });
  return { type: null };
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  removeUser,
};
