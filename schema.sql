DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR (30) NOT NULL
);

CREATE TABLE roles (
    title VARCHAR (30) NOT NULL,
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dept_id INT,
    salary INT NOT NULL,
    FOREIGN KEY (dept_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);

CREATE TABLE employees (
    id INT NOT NULL,
    first_name VARCHAR (30) NOT NULL,
    last_name VARCHAR (30) NOT NULL,
    role_id INT,
    dept VARCHAR (30),
    salary INT NOT NULL,
    manager VARCHAR (30) NOT NULL,
    FOREIGN KEY (role_id)
    REFERENCES roles(id)
    ON DELETE SET NULL
);

