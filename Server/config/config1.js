
require('../database/sequelize.connection');
// check env.

var env = process.env.NODE_ENV || 'development';
// fetch env. config
var config = require('./config1.json');
var envConfig = config[env];
// add env. config values to process.env
Object.keys(envConfig).forEach(key => process.env[key] = envConfig[key]);




