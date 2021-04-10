require("dotenv").config();
let express = require('express');
let app = express();
const sequelize = require("./db");

let chick = require('./controllers/chickController')
let inventory = require('./controllers/inventoryController')
let order = require('./controllers/orderController')
let profile = require('./controllers/profileController')
let user = require('./controllers/userController');

sequelize.sync();

app.use(express.json());

app.use('/chick', chick)
app.use('/inventory', inventory)
app.use('/order', order)
app.use('/profile', profile)
app.use('/user', user)

app.listen(3000, function() {
    console.log('App is listening on port 3000');
})