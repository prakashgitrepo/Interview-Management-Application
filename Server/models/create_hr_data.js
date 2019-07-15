'use strict';
module.exports = (sequelize, DataTypes) => {
  const create_hr_data = sequelize.define('create_hr_data', {
    jobName: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  create_hr_data.associate = function(models) {
    // associations can be defined here
  };
  return create_hr_data;
};