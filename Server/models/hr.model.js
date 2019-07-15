const Sequelize = require('sequelize');
const db =require('../database/sequelize.connection');

module.exports = sequelize.define('data',{
    jobName:{
        type:Sequelize.STRING
    },
    description:{
        type:Sequelize.STRING
    }
})