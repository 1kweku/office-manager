USE company_db;

INSERT INTO department (dept_name)
VALUES ("Engineering"),
       ("Sales"),
       ("Finance"),
       ("Legal"),
       ("Operations");
       
INSERT INTO roles (title, dept_id, salary)
VALUES ("Sr Engineer", 1, 200000),
       ("Jr Engineer", 1, 110000),
       ("Sales Lead", 2, 80000),
       ("Accountant", 3, 120000),
       ("Lawyer", 4, 300000),
       ("Customer Representative", 5, 60000),
       ("Manager", 5, 100000);

INSERT INTO employees (first_name, last_name, role_id, dept, salary, manager)
VALUES ("Kweku", "Adarkwa", 1, "Engineering", 200000, 'Kweku');
       
       