// Here we require sequelize
var Sequelize = require("sequelize");

// Lists out connection options
var source = {

    localhost: {
        port: 3306,
        host: 'localhost',
        user: 'root',
        database: "hotrest"
    },
    jawsdb: {
        port: 3306,
        host: "g8r9w9tmspbwmsyo.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "pt9o0dbrxcxcw3vm",
        password: "fjni5aqjn4vdr2y1",
        database: 


    },

}

// Selects a connection (can be changed quickly as needed)
var selectedSource = source.jawsdb;

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize(selectedSource.database, selectedSource.user, selectedSource.password, {
  host: selectedSource.host,
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

});

// Exports the connection for other files to use
module.exports = sequelize;