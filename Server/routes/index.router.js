// routed only for HR Managing data
const express = require('express');
const router = express.Router();
const hrdata = require('../models/hr.model');
const candidate = require('../models/candiatate.model')
const ctrlUser = require('../controllers/user.controller');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.post('/userProfile', ctrlUser.userProfile);
router.post('/hradd', ctrlUser.hradd);


router.post('/hradd', (req, res) => {
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
            .then(hrdatas => res.redirect('/'))
            .catch(err => console.log(err));
        }
      });

    
module.exports = router;