const mysql = require('mysql2')

const getConnect = () => {
    return con = mysql.createConnection({
      host: "localhost",
      port: "3306",
      user: "root",
      password: "Root",
      database: "persondb"
    });
  }

  module.exports = {getConnect}