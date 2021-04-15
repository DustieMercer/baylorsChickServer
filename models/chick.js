const { Op, DataTypes } = require("sequelize");
const sequelize = require("../db");


  const Chick = sequelize.define("chick", {
      chick_name: DataTypes.STRING,
      chick_type: DataTypes.STRING,
      chick_production: DataTypes.STRING,
      chick_persona: DataTypes.STRING,
      photo: DataTypes.STRING
  });

  module.exports = Chick;
