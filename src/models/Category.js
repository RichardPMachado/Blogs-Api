module.exports = (sequelize, dataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: dataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: dataTypes.STRING,
  }, {
    underscored: true,
    tableName: 'categories',
    timestamps: false,
  })
  return Category;
}