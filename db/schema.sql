DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE department (
    id INT NOT NULL primary key auto_increment,
    name VARCHAR(30) NOT NULL
    
);

CREATE TABLE role (
    id INT NOT NULL primary key auto_increment,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT
);

CREATE TABLE employee (
    id INT NOT NULL primary key auto_increment,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT ,
    manager_id INT
);