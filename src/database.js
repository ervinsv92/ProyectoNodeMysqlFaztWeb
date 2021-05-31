const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host:'104.236.224.107',
    user:'admin',
    password:'jqu333Ry',
    database:'NodeJsDemo'
});

mysqlConnection.connect(function(err){
    
    if(err){
        console.log(err);
    }else{
        console.log("Bd is connected");
    }
});

module.exports = mysqlConnection;