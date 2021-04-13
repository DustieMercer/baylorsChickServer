const { Op, DataTypes } = require("sequelize");
const { Profile } = require(".");
const sequelize = require("../db");


  const User = sequelize.define("user", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: DataTypes.STRING,
  });

  User.associate = models => {
    User.hasOne(models.Profile, {
      onDelete: "cascade"
    });
    User.hasMany(models.Order, {
      onDelete: "cascade"
    });
  }

module.exports = User;