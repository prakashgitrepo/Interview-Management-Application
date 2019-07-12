const mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'imsdb',
});

mysqlConnection.connect(process.env.NODE_ENV,(err)=>{
    if (!err) { console.log('DB connection succeeded.'); }
    else { console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2)); }
});

require('./user.model');
