const Sequelize = require('sequelize');
const db =require('../database/sequelize.connection');

const hrdata =db.define('data',{
    jobName:{
        type:Sequelize.STRING
    },
    description:{
        type:Sequelize.STRING
    }
})