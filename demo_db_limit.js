var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  //Return the first 5 customers:
  con.query("SELECT * FROM customers LIMIT 5", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});