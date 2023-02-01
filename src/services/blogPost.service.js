const { BlogPost,
    sequelize,
    User,
    Category,
    PostCategory,
  } = require('../models');
const decodeToken = require('../token/decodeToken');

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

const getPostById = async (id) => {
  const post = await BlogPost.findByPk(id, {
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
  console.log('qw', post);
  if (!post) return { type: 'POST_NOT_EXIST', message: 'Post does not exist' };
  return { type: null, message: post.dataValues };
};

const createBlogPost = async ({ title, content, categoryIds, authorization }) => {
  const user = await decodeToken(authorization);
  const categoriesPromises = await categoryIds
  .map((categoryId) => Category.findByPk(categoryId));
  const categories = await Promise.all(categoriesPromises);
  const isCategories = categories.every((item) => item);
  if (!isCategories) {
    return { type: 'CATEGORY_NOT_FOUND', message: 'one or more "categoryIds" not found' };
  }
    const result = await sequelize.transaction(async (t) => {
    const newPost = await BlogPost.create({ 
      title, content, userId: user.id, updated: Date.now(), published: Date.now() },
      { transaction: t, 
      });
    return newPost;
  });
  await Promise.all(categoryIds
    .map((categoryId) => PostCategory.create({ postId: result.dataValues.id, categoryId })));
  return { type: null, message: result.dataValues };
};

module.exports = { 
  createBlogPost,
  getAllPosts,
  getPostById,
};