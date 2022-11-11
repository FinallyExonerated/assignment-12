const db = require('./connection');

function findAllEmployees() {
    return db.promise().query(`SELECT * FROM employees`, (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result);
      });
}


module.exports = { findAllEmployees }