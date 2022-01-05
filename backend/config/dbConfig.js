/* eslint-disable */
'user strict';
const mysql = require('mysql');

//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'mysqlDB',
  port     :  '3306' ,
  user     : 'root',
  password : 'password',
  database : 'mysqlDB'
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});

module.exports = dbConn