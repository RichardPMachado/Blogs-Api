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
        type: Sequelize.STRING(255),
        allowNull: false
      },
      content: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'user_id',
        foreignKey: true,
        references: {
          model:'users', // a model indica a tabela em que o userId faz referência
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      published: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date,
      },
      updated: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date,
      }
    })
  },  

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('blog_posts');  
  }
};
