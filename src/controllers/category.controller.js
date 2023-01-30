const { categoryService } = require('../services');

// const { mapError } = require('../utills/errorMap');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const message = await categoryService.createCategory({ name });
  return res.status(201).json(message);
};

const getAllCategories = async (req, res) => {
  const categories = await categoryService.getAllCategories();
  return res.status(200).json(categories); 
};

module.exports = { createCategory, getAllCategories };