const Sequelize = require("sequelize");

const sequelize = new Sequelize("imsdb","root","password",{
    host: "127.0.0.1",
    operatorAliases:false,
    dialect: "mysql"


});

module.exports=sequelize;
global.sequelize=sequelize;