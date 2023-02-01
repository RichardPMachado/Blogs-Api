const { blogPostService } = require('../services');
const { mapError } = require('../utills/errorMap');

const createBlogPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { authorization } = req.headers;

  const post = await blogPostService.createBlogPost({ title, content, categoryIds, authorization });
  console.log('a', post);
  if (post.type) return res.status(mapError(post.type)).json(post.message);
  return res.status(201).json(post.message);
};

const getAllPosts = async (_req, res) => {
  const allPosts = await blogPostService.getAllPosts();
  return res.status(200).json(allPosts);
};

module.exports = { getAllPosts, createBlogPost };