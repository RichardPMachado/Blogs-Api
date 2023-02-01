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

const getPostByid = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await blogPostService.getPostById(id);

  if (type) return res.status(mapError(type)).json({ message });
  return res.status(200).json(message);
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  const { authorization } = req.headers;
  const { type, message } = await blogPostService.removePost(id, authorization);
  // console.log('r', message);
  if (type) return res.status(mapError(type)).json({ message });

  return res.status(204).end();
};

module.exports = { getAllPosts, createBlogPost, getPostByid, deletePost };