const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: 'root2315',
        database: 'company_db'
    },
    console.log(`Connected to the company database.`)
);

module.exports = db;