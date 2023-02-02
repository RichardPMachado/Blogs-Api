const { userService } = require('../services');
const { mapError } = require('../utills/errorMap');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { type, message } = await userService.createUser({ displayName, email, password, image });
  if (type) return res.status(mapError(type)).json({ message });
  const token = message;
  return res.status(201).json({ token });
};

const getAll = async (_req, res) => {
  const users = await userService.getAllUsers();
  return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await userService.getUserById(id);

  if (type) return res.status(mapError(type)).json({ message });
  return res.status(200).json(message);
};

const deleteUser = async (req, res) => {
  const { authorization } = req.headers;
  const { type, message } = await userService.removeUser(authorization);
  // console.log('r', message);
  if (type) return res.status(mapError(type)).json({ message });
  return res.status(204).end();
};

module.exports = {
  createUser,
  getAll,
  getUserById,
  deleteUser,
};