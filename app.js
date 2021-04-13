require("dotenv").config();
let express = require('express');
let app = express();
const sequelize = require("./db");
const Port = process.env.PORT || 3000;
const controllers = require("./controllers")
const middleware = require("./middleware")

// let chick = require('./controllers/chickController')
// let inventory = require('./controllers/inventoryController')
// let order = require('./controllers/orderController')
// let profile = require('./controllers/profileController')
let user = require('./controllers/userController');

sequelize.sync();

app.use(express.json());

app.use('/chick', controllers.chick)
app.use('/inventory', controllers.inventory)
app.use('/order', controllers.order)
app.use('/profile', controllers.profile)
app.use('/user', controllers.user)

app.listen(Port, function() {
    console.log(`App is listening on port ${Port}`);
})