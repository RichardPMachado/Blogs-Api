const { categoryService } = require('../services');

// const { mapError } = require('../utills/errorMap');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const message = await categoryService.createCategory({ name });
  console.log(message);
  return res.status(201).json(message);
};

module.exports = { createCategory };