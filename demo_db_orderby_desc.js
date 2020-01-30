var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  //Sort by name, in descending order:
  con.query("SELECT * FROM customers ORDER BY name DESC", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});