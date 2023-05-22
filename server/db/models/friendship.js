const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class FriendShip extends Model {
    static associate({ User }) {
      FriendShip.belongsTo(User, { foreignKey: 'subjectUserId' });
      FriendShip.belongsTo(User, { foreignKey: 'objectUserId' });
    }
  }
  FriendShip.init(
    {
      subjectUserId: DataTypes.INTEGER,
      objectUserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'FriendShip',
    },
  );
  return FriendShip;
};
