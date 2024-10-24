"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Notification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Notification.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      recipientEmail: { type: DataTypes.STRING, allowNull: false },
      bookingStatus: {
        type: DataTypes.ENUM,
        values: ["PENDING", "SUCCESS", "REJECTED"],
        defaultValue: "PENDING",
      },
      bookingDate: { type: DataTypes.DATE, allowNull: false },
      template: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "Notification",
    }
  );
  return Notification;
};
