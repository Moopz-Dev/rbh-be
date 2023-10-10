"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(models.Card, { as: "card", foreignKey: "cardId" });
      Comment.belongsTo(models.User, { as: "user", foreignKey: "userId" });
    }
  }
  Comment.init(
    {
      text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: "users",
          },
          key: "id",
        },
        allowNull: false,
      },
      cardId: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: "cards",
          },
          key: "id",
        },
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Comment",
      underscored: true,
    }
  );
  return Comment;
};
