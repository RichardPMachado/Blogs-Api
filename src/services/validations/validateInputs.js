const { createSchema } = require('./schema');

const createUserValidation = ({ displayName, email, password }) => {
  const { error } = createSchema.validate({ displayName, email, password });
  console.log(error);
  if (error) return { type: 'INVALID_VALUE', message: error.message };
  return { type: null, message: '' };
};

module.exports = {
  createUserValidation,
};