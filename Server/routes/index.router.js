// routed only for HR Managing data
const express = require('express');
const router = express.Router();
const hrdata = require('../models/hr.model');
const candidate = require('../models/candiatate.model')

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

      router.post('/userProfile', (req, res) => {
        let { name, age,experience,qualification,contact } = req.body;
        let errors = [];
       // Validate Fields
        if(!name) {
          errors.push({ text: 'Please add the Name' });
        }
        
        if(!age) {
          errors.push({ text: 'Please add the age' });
        }
        if(!experience) {
            errors.push({ text: 'Please add the experience' });
          }
          if(!qualification) {
            errors.push({ text: 'Please add the qualification' });
          }
          if(!contact) {
            errors.push({ text: 'Please add the contact details' });
          }
         // Check for errors
        if(errors.length > 0) {
          res.render('add', {
            errors,
            name,
            age,
            experience,  
            qualification, 
            contact
          });
        } else {
          // Insert into table
          candidate.create({
            name,
            age,
            experience,  
            qualification, 
            contact
          })
            .then(hrdatas => res.redirect('/'))
            .catch(err => console.log(err));
        }
      });

module.exports = router;