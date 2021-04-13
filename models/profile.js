const { Op, DataTypes } = require("sequelize");
const sequelize = require("../db");


  const Profile = sequelize.define("profile", {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    address_1: DataTypes.STRING,
    address_2: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    phone_number: DataTypes.STRING,
  });

  Profile.associate = models => {
    Profile.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    })
  }
  

  module.exports = Profile;