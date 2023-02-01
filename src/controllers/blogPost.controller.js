const { blogPostService } = require('../services');
const { mapError } = require('../utills/errorMap');

const createBlogPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { authorization } = req.headers;

  const { type, message } = await blogPostService
    .createBlogPost({ title, content, categoryIds, authorization });
    if (type) return res.status(mapError(type)).json({ message });
    console.log('a', type, message);
  return res.status(201).json(message);
};

const getAllPosts = async (_req, res) => {
  const allPosts = await blogPostService.getAllPosts();
  return res.status(200).json(allPosts);
};

module.exports = { getAllPosts, createBlogPost };