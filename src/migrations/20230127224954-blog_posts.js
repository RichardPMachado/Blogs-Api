'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('blog_posts', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'user_id',
        references: {
          model:'users', // a model indica a tabela em que o userId faz referência
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      created_at: {  
        field: 'published',
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        field: 'updated',
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },  

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('blog_posts');  
  }
};
