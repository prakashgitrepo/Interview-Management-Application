require('./config/config1');
require('./models/db');

const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const cors = require('cors');

const rtsIndex = require('./controllers/user.controller');


const app = express();
app.engine('handlebars',exphbs  ({defaultLayout:main}));
app.set('view engine','handlebars');    

app.use(bodyParser.json());
app.use(cors());
app.use('/api', rtsIndex);
app.use('/hrdata',require('./routes/index.router'))
app.set('view engine', 'jade')

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