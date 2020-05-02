const mysql = require("mysql");

let connection;

if (process.env.JAWSDB_URL) {
  // If the server contains the JAWSDB_URL environmental variable, it connects to the JawsDB database.
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  // If the server lacks the variable, it falls back on an explicitly defined local database.
  connection = mysql.createConnection({
      port: 3306,
      host: "localhost",
      user: "root",
      password: "ariHuy12",
      database: "burgers_db"
  });
};

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


module.exports = connection;