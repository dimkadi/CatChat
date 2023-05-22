const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsToMany(models.User, { through: 'Friendships', as: 'SubjectUsers', foreignKey: 'subjectUserId' });
      User.belongsToMany(models.User, { through: 'Friendships', as: 'ObjectUsers', foreignKey: 'objectUserId' });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
