const { BlogPost,
    sequelize,
    User,
    Category,
  } = require('../models');
const decodeToken = require('../token/decodeToken');

const createBlogPost = async ({ title, content, categoryIds, authorization }) => {
  const user = await decodeToken(authorization);
  // console.log('aaa', user);
  const categoriesPromises = await categoryIds
  .map((categoryId) => Category.findByPk(categoryId));

  const categories = await Promise.all(categoriesPromises);
  const isCategories = categories.every((item) => item);

  if (!isCategories) return { type: 400, message: 'one or more "categoryIds" not found' };
  const result = await sequelize.transaction(async (t) => {
    const newPost = await BlogPost.create({ 
      title, content, userId: user.id, updated: Date.now(), published: Date.now() },
      { 
        includes: [{ model: Category, as: 'categoryIds' }],
        transaction: t,
      });
    return newPost;
  });
  console.log('oi', result);
  return { type: null, message: result };
};

const getAllPosts = async () => {
  const allPosts = await BlogPost.findAll({
    attributes: {
      exclude: ['userId'],
    },
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] },
    },
    {
      model: Category,
      as: 'categories',
    }],
  });
  return allPosts;
};

module.exports = { 
  createBlogPost,
  getAllPosts,
};