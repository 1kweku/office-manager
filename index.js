const inquirer = require('inquirer');
const mysql = require('mysql2');


const db = mysql.createConnection(
    {
      host: '127.0.0.1',
      user: 'root',
      password: '',
      database: 'company_db',
      
    },
    console.table(`Connected to the company_db database.`)
  );

const questions = async () => {
    const response = await inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            name: "options",
            choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"]
        },
    ]);

if (response.options === "View all departments") {
    db.query(`SELECT * FROM department`, (err, res) => {
        if (err) throw err;
        console.table(res);
    })
questions();
}

else if (response.options === "View all roles") {
    db.query(`SELECT * FROM roles`, (err, res) => {
        if (err) throw err;
        console.table(res);
    })
questions();
}

else if (response.options === "View all employees") {
    db.query(`SELECT * FROM employees`, (err, res) => {
        if (err) throw err;
        console.table(res);
    })
questions();
}

else if (response.options === "Add a department") {
const dept = await inquirer.prompt([
    {
    type: 'input',
    message: 'Department name?',
    name: 'name'
    },
])

db.query(`INSERT INTO department (dept_name) VALUES ('${dept.name}')`
, (err, res) => {
    if (err) throw err;
    console.table(res);
})
questions();
}

else if (response.options === "Add a role") {
const role = await inquirer.prompt([
    {
    type: 'input',
    message: 'What is the title of this role?',
    name: 'title'
    },

    {
    type: 'input',
    message: 'Which department does this role belong to?',
    name: 'department',
    },
    {
    type: 'input',
    message: 'What is this roles salary?',
    name: 'salary'
    },
])

db.query(`INSERT INTO roles (title, dept_id, salary) VALUES ('${role.title}', '${role.department}', '${role.salary}')`
, (err, res) => {
    if (err) throw err;
    console.table(res);
})
questions();
}

else if (response.options === "Add an employee") {
const employee = await inquirer.prompt([
    {
    type: 'input',
    message: 'What is employees first name?',
    name: 'firstName'
    },

    {
    type: 'input',
    message: 'What is employees last name?',
    name: 'lastName'
    },
    
    {
    type: 'input',
    message: 'What is the ID of this employees role?',
    name: 'roleID'
    },
    
    {
    type: 'list',
    message: 'Which department is this employee under?',
    name: 'dept',
    choices: ['Engineering', 'Sales', 'Finance', 'Legal', 'Operations']
    },

    {
    type: 'input',
    message: 'What is this employees salary?',
    name: 'salary'
    },
   
    {
    type: 'input',
    message: 'Who is this employees manager?',
    name: 'manager'
    },
])

db.query(`INSERT INTO employees (first_name, last_name, role_id, dept, salary, manager) VALUES ('${employee.firstName}', '${employee.lastName}', '${employee.roleID}', '${employee.dept}', '${employee.salary}', '${employee.manager}')`
, (err, res) => {
    if (err) throw err;
    console.table(res);
})
questions();
}

else if (response.options === "Update an employee role") {
    const employeeUpdate = await inquirer.prompt([
        {
        type: 'input',
        message: 'What is this employees ID',
        name: 'id'
        },
        {
        type: 'input',
        message: 'What is the employees new role?',
        name: 'role',
        }
    ])
const params = [employeeUpdate.role, employeeUpdate.id]
db.query(`UPDATE employees SET role_id = ? WHERE id = ?`, params);
questions();
}
};


questions();

