const Sequelize = require('sequelize');
//const bcrypt = require('bcryptjs');

 
module.exports = sequelize.define('user',{
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
            notNull: { args: true, msg: "You must enter a name" }}
    },
    password: {
        type: Sequelize.STRING,
        required: 'Password can\'t be empty',
        minlength : [4,'Password must be atleast 4 character long'],
        allowNull: false,
        validate: {
            notNull: { args: true, msg: "You must enter a name" }}
  },
    saltSecret: Sequelize.STRING
});

/*user.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});*/

