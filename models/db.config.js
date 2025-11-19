const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dbpraktikum8'
});

console.log('Database connected.');

module.exports = db;