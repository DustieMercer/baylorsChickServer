const { Op, DataTypes } = require("sequelize");
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


module.exports = User;