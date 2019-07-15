const express = require('express');
const bcrypt=require('bcrypt');
const mysql = require('mysql2');
const passport= require('passport');
//const router = express.Router();
const User = require('../models/user.model');


module.exports.register = async function(req, res) {
    let { fullName,email,password } = req.body;
    let errors = [];
User.create({
    fullName,
    email,
    password
  })
    .then(user => res.redirect('/users'))
    .catch((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }

    });
}

module.exports.authenticate = async function(req, res) {
    // call for passport authentication
    passport.authenticate('local', (err, user, info) => {       
        // error from passport middleware
        if (err) return res.status(400).json(err);
        // registered user
        else if (user) return res.status(200).json({ "token": user.generateJwt() });
        // unknown user or wrong password
        else return res.status(404).json(info);
    })(req, res);
}

module.exports.userProfile= async function(req, res) {
    let { name, age, experience,qualification, contact } = req.body;
    let errors = [];
  
    // Validate Fields
    if(!name) {
      errors.push({ text: 'Please add a your name' });
    }
    if(!age) {
      errors.push({ text: 'Please enter the age' });
    }
    if(!experience) {
      errors.push({ text: 'Please add a experience' });
    }
    if(!qualification) {
      errors.push({ text: 'Please add a qualification' });
    }
    if(contact) {
        errors.push({ text: 'Please add a contact number' });
      }
  
    // Check for errors
    if(errors.length > 0) {
      res.render('', {
        errors,
        name, age, experience,qualification, contact
      });
    } else {
       // Insert into table
      candidate_data.create({
        name, age, experience,qualification, contact
    })
        .then(candidate_data=> res.redirect('/userProfile'))
        .catch(err => console.log(err));
    }
  };
  
  module.exports.hradd= async function(req, res) {
    let { jobName, description } = req.body;
    let errors = [];
   // Validate Fields
    if(!jobName) {
      errors.push({ text: 'Please add the jobname' });
    }
    
    if(!description) {
      errors.push({ text: 'Please add a description' });
    }
     // Check for errors
    if(errors.length > 0) {
      res.render('add', {
        errors,
        jobName,  
        description, 
      });
    } else {
      // Insert into table
      hrdata.create({
        jobName,
        description 
      })
        .then(hrdatas => res.redirect('/hradd'))
        .catch(err => console.log(err));
    }
  };

  

/*router.post('/register', (req, res) => {
    let { fullName,email,password } = req.body;
    let errors = [];
User.create({
    fullName,
    email,
    password
  })
    .then(user => res.redirect('/users'))
    .catch((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }

    });

});*/

/*router.post('/authenticate', (req, res) => {
    query(sql,['hradmin@mail.com','hradmin']),function(err,result)
    {
        if(err) throw err;
        console.log(result);
    }
});*/

//router.get('/userProfile', (req, res) => res.render('userProfile'));
    
//module.exports = router;

/*router.post('/authenticate', (req, res) => {
    let { email, password } = req.query;
    User.findAll({ where:(user => user.email == email && user.password == password)  })
      .then(users => res.render('users', { users }))
      .catch(err => console.log(err));
  });*/

  


//const mysql = require('mysql');
//const fields = require('../models/user.model');
//var connection =new Sequelize('imsdb','root','password','mysql');
//const bcrypt = require('bcryptjs');

/*app.get(module.exports.register,(req,res,next)=>{
    let post={
        fullName:req.fullName,
        email:req.email,
        password:req.password
            };
    let sql = 'INSERT INTO users SET ?';
    let query= sequelize.query(sql,post,(err,result)=>{
        if (!err)
        res.send(result);
    else {
        if (err.code == 11000)
            res.status(422).send(['Duplicate email adrress found.']);
        else
            return next(err);
    }
});
});*/

   

/*fields.sync({
    force:true
}).then(module.exports.register = (req, res, next) => {
    fields.create({
        fullName:req.fullName,
        email:req.email,
        password:req.password

    }).then(function(req,res){
        save((err, doc) => {
            if (!err)
                res.send(doc);
            else {
                if (err.code == 11000)
                    res.status(422).send(['Duplicate email adrress found.']);
                else
                    return next(err);
            }
    
        })

    })
})*/
/*module.exports.register = (req, res, next) => {
    var user = new User();

    user.fullName = req.fullName;
    user.email = req.email;
    user.passwordu = req.password;
    user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }

    });*/
  /*  //for encrypting password
    User('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});

// Custom validation for email
User.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');
} 
}*/
 
/*router.post('\authenticate',(req, res)=>{
    async function authenticate({ email, password }) {
        const user = users.find(u => u.email === email && u.password === password);
        consolre.log("Connected to Dashboard");
        }
    }
    
);
*/