'use strict';
module.exports = (sequelize, DataTypes) => {
  const create_candidate_data = sequelize.define('create_candidate_data', {
    name: DataTypes.STRING,
    age: DataTypes.NUMBER,
    experience: DataTypes.NUMBER,
    qualification: DataTypes.STRING,
    contact: DataTypes.NUMBER
  }, {});
  create_candidate_data.associate = function(models) {
    // associations can be defined here
  };
  return create_candidate_data;
};