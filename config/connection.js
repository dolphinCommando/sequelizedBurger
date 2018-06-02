require('dotenv').config();
const Sequelize = require('sequelize');
var sequelize;
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL); 
} else {
  sequelize = new Sequelize(process.env.SQL_HOST, process.env.SQL_USER, process.env.SQL_PASSWORD, {
    host: process.env.SQL_HOST,
    dialect: 'mysql'
  });
}

/*
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
*/

module.exports = sequelize;
