'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users',{
      fullName: {
       type: Sequelize.STRING,
        required: 'Full name can\'t be empty'
    },
    email: {
        type: Sequelize.STRING,
        required: 'Email can\'t be empty',
        unique: true,
        allowNull: false,
        validate: {
          notNull: { args: true, msg: "You must enter a email" }}
    },
    password: {
        type: Sequelize.STRING,
        required: 'Password can\'t be empty',
        minlength : [4,'Password must be atleast 4 character long'],
        allowNull: false,
        validate: {
          notNull: { args: true, msg: "You must enter a password" }}
  },
    saltSecret: Sequelize.STRING,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.TIME
})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
