const mysql2 = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: '',
        database: 'books_db'
    },
    console.log(`Connected to the books_db database.`)
);

module.exports = db;