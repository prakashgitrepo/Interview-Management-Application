const Sequelize = require('sequelize');
const db =require('../database/sequelize.connection');

const candidate =db.define('data',{
    name:{
        type:Sequelize.STRING
    },
    age:{
        type:Sequelize.NUMBER
    },
    experience:{
        type:Sequelize.NUMBER
    },
    qualification:{
        type:Sequelize.STRING
    },
    contact:{
        type:Sequelize.NUMBER
    },
})