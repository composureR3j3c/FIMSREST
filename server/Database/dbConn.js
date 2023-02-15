const mysql = require('mysql');

const conn = mysql.createConnection({
   host: "127.0.0.1",
   user: "root",
   password: "bereket",
   // if db created
   database: "FIMS_DB"
});

conn.connect((err) => {
   if (err) throw err;
   console.log('connected');
});

module.exports=conn