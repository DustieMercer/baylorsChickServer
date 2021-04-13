const User = require("./user");
const Profile = require("./profile");
// const Order = require("./order");
// const Inventory = require("./inventory");
// const Chick = require("./chick");

User.hasOne(Profile);
Profile.belongsTo(User);

module.exports = {
    User,
    Profile,
    // Order,
    // Chick,
    // Inventory,
};