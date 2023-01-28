'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_categories', {
      postId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'blog_posts',
          key: 'id',
        },
        field: 'post_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      categoryId: {
        type: Sequelize.INTEGER,
        primaryKey:true,
        field: 'category_id',
        references: {
          model: 'categories',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      } 
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('posts_categories');
  }
};
