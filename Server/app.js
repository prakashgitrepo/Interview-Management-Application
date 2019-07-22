require('./config/config1');
require('./models/db');
require('./config/passportConfig');

const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const rtsIndex = require('./routes/index.router');


const app = express();


app.use(bodyParser.json());
app.use(cors());
app.use('/api', rtsIndex);
app.use(passport.initialize());



// error handler
app.use((err, req, res) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});

//Sequelize db connection
require("./database/sequelize.connection");


app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));
