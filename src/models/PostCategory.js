module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define( 'PostCategory', {
    postId: { type: DataTypes.INTEGER, primaryKey: true },
    categoryId: { type: DataTypes.INTEGER, primaryKey: true },
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'posts_categories',
  });

  PostCategory.associate = ({ BlogPost, Category }) => {
    BlogPost.belongsToMany(Category, {
      as: 'post_category',
      through: PostCategory,
      foreignKey: 'postId', 
      otherKey: 'categoryId',
    });

    Category.belongsToMany(BlogPost, {
      as: 'users',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId', 
    });
  };
  return PostCategory;
} 