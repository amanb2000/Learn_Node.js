var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "scotty",
  password: "scotty",
  database : 'test_db',
  socketPath: '/var/run/mysqld/mysqld.sock'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
