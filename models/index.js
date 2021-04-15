const User = require("./user");
const Profile = require("./profile");
const Order = require("./order");
const Inventory = require("./inventory");
const Chick = require("./chick");

User.hasOne(Profile,{
    allowNull: false
});
Profile.belongsTo(User,{
    allowNull: false
});

User.hasMany(Order);
Order.belongsTo(User);

User.hasMany(Inventory);
Inventory.belongsTo(User);

User.hasMany(Chick);
Chick.belongsTo(User);

module.exports = {
    User,
    Order,
    Chick,
    Profile,
    Inventory,
};