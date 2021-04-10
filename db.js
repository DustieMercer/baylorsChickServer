const Sequelize = require('sequelize');

const sequelize = new Sequelize('baylors_chick_inn', 'postgres', 'password', {
    host:'localhost',
    dialect: 'postgres'
});

// const sequelize = new Sequelize(process.env.DATABASE_URL, {
//     dialect: 'postgres',
// });

sequelize.authenticate().then(
    function() {
        console.log('Connected to baylors_chick_inn postgres database');
    },
    function(err){
        console.log(err);
    }
);
module.exports = sequelize;