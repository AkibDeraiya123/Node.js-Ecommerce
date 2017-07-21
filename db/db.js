const mysql = require('mysql');

// Database Connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "online_shopping",
  password: "",
});

connection.connect((error, success) => {
	if (error) {
		console.log(error)
		console.log("Database Not Connected")
	} else if (success) {
		console.log("Database Conncted")
	}
});

module.exports = connection;