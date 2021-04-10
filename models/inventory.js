const { Op, DataTypes } = require("sequelize");
const sequelize = require("../db");

module.exports = (sequelize, DataTypes) => {
  const Inventory = sequelize.define("inventory", {
      item_number: DataTypes.INTEGER,
      item_description: DataTypes.STRING,
      unit_type: DataTypes.STRING,
      quantity_update: DataTypes.INTEGER,
      quantity_available: DataTypes.INTEGER,
      unit_cost: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
  });
  return Inventory;
};
