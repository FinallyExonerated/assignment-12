const db = require('./connection');
require('console.table');

function findAllEmployees() {
    return db.query(`SELECT * FROM employee`, (err, result) => {
        if (err) {
          console.log(err);
        }
        console.table(result);
      });
}

function findAllRoles() {
  return db.query(`SELECT * FROM role`, (err, result) => {
      if (err) {
        console.log(err);
      }
      console.table(result);
    });
}

function findAllDepartments() {
  return db.query(`SELECT * FROM department`, (err, result) => {
      if (err) {
        console.log(err);
      }
      console.table(result);
    });
}

module.exports = { findAllEmployees, findAllRoles, findAllDepartments }