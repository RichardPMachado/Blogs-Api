const { BlogPost,
    // sequelize, User, Category
  } = require('../models');

// const createBlogPost = async ({ title, content, categoryIds }) => {
//   const result = await sequelize.transaction(async (t) => {
//     const newPost = await BlogPost.create({ title, content, categoryIds },
//       { 
//         includes: [{ model: BlogPost, as: 'categoryIds' }],
//         transaction: t,
//       });
//   });
// };
const getAllPosts = async () => {
  const allPosts = await BlogPost.findAll();
  console.log(allPosts);
  return allPosts;
};

module.exports = { 
  // createBlogPost
  getAllPosts,
};