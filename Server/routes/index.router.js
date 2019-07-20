
const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.post('/userProfile', ctrlUser.userProfile);
router.post('/hradd', ctrlUser.hradd);



    
module.exports = router;
