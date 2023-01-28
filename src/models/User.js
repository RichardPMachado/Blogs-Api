module.exports = (sequelize, dataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: dataTypes.INTEGER,
      primaryKey:  true,
      allowNull:false,
      autoIncremente: true,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'users',
  });

  return User;
}