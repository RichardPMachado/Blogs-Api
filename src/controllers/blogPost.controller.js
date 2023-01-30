const { blogPostService } = require('../services');

const getAllPosts = async (_req, res) => {
  const allPosts = await blogPostService.getAllPosts();
  return res.status(200).json(allPosts);
};

module.exports = { getAllPosts };