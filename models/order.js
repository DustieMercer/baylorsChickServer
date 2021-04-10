const { Op, DataTypes } = require("sequelize");
const sequelize = require("../db");

module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define("order", {
      item_number: DataTypes.INTEGER,
      item_description: DataTypes.STRING,
      unit_type: DataTypes.STRING,
      quantity_ordered: DataTypes.INTEGER,
      unit_cost: DataTypes.INTEGER,
      item_total: DataTypes.INTEGER,
      order_total: DataTypes.INTEGER,
      status: DataTypes.STRING,
      user_id: DataTypes.INTEGER
  });
  return Order;
};
