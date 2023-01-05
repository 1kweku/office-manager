const inquirer = require('inquirer');
const mysql = require('mysql2');


const db = mysql.createConnection(
    {
      host: '127.0.0.1',
      user: 'root',
      password: '',
      database: 'company_db',
      
    },
    console.log(`Connected to the company_db database.`)
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
}

else if (response.options === "View all roles") {
    db.query(`SELECT * FROM roles`, (err, res) => {
        if (err) throw err;
        console.table(res);
    })
}

else if (response.options === "View all employees") {
    db.query(`SELECT * FROM employees`, (err, res) => {
        if (err) throw err;
        console.table(res);
    })
}

else if (response.options === "Add a department") {
const dept = await inquirer.prompt([
    {
    type: 'input',
    message: 'Department name?',
    name: 'dept'
    },
])

db.query(`INSERT INTO department (dept_name) VALUES ('${dept.dept}')`
, (err, res) => {
    if (err) throw err;
    console.log(res);
})
}

else if (response.options === "Add a role") {
const role = await inquirer.prompt([
    {
    type: 'input',
    message: 'What is the title of this role?',
    name: 'roleTitle'
    },

    {
    type: 'input',
    message: 'Which the department ID of this role?',
    name: 'roleID'
    },
    {
    type: 'input',
    message: 'What is this roles salary?',
    name: 'roleSalary'
    },
])

db.query(`INSERT INTO roles (title, dept_id, salary) VALUES ('${role.roleTitle}', '${role.roleID}', '${role.roleSalary}')`
, (err, res) => {
    if (err) throw err;
    console.log(res);
})
}

// const roleDept = await inquirer.prompt([
//     {
//     type: 'input',
//     message: 'Which the department ID of this role?',
//     name: 'roleDept'
//     },
// ])

// db.query(`INSERT INTO roles (dept_id) VALUES ('${roleDept.roleDept}')`
// , (err, res) => {
//     if (err) throw err;
//     console.log(res);
// })

// const roleSalary = await inquirer.prompt([
//     {
//     type: 'input',
//     message: 'What is this roles salary?',
//     name: 'roleSalary'
//     },
// ])

// db.query(`INSERT INTO roles (salary) VALUES ('${roleSalary.roleSalary}')`
// , (err, res) => {
//     if (err) throw err;
//     console.log(res);
// })
// }


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
    type: 'input',
    message: 'Which department is this employee under?',
    name: 'deptID'
    },

    {
    type: 'input',
    message: 'What is this employees salary?',
    name: 'salary'
    },
   
    {
    type: 'input',
    message: 'Who is this roles manager?',
    name: 'manager'
    },
])

db.query(`INSERT INTO employees (first_name, last_name, role_id, dept, salary, manager) VALUES ('${employee.firstName}', '${employee.lastName}', '${employee.roleID}', '${employee.deptID}', '${employee.salary}', '${employee.manager}')`
, (err, res) => {
    if (err) throw err;
    console.log(res);
})
}

// const lastName = await inquirer.prompt([
//     {
//     type: 'input',
//     message: 'What is employees last name?',
//     name: 'lastName'
//     },
// ])

// db.query(`INSERT INTO employees (last_name) VALUES ('${lastName.lastName}')`
// , (err, res) => {
//     if (err) throw err;
//     console.log(res);
// })

// const employeeID = await inquirer.prompt([
//     {
//     type: 'input',
//     message: 'What is this employees ID?',
//     name: 'employeeID'
//     },
// ])

// db.query(`INSERT INTO employees (employeeID) VALUES ('${employeeID.employeeID}')`
// , (err, res) => {
//     if (err) throw err;
//     console.log(res);
// })
// const employeeDept = await inquirer.prompt([
//     {
//     type: 'input',
//     message: 'Which department is this employee under?',
//     name: 'employeeDept'
//     },
// ])

// db.query(`INSERT INTO employees (dept) VALUES ('${employeeDept.employeeDept}')`
// , (err, res) => {
//     if (err) throw err;
//     console.log(res);
// })

// const salary = await inquirer.prompt([
//     {
//     type: 'input',
//     message: 'What is this employees salary?',
//     name: 'salary'
//     },
// ])

// db.query(`INSERT INTO employees (salary) VALUES ('${salary.salary}')`
// , (err, res) => {
//     if (err) throw err;
//     console.log(res);
// })

// const manager = await inquirer.prompt([
//     {
//     type: 'input',
//     message: 'Who is this roles manager?',
//     name: 'manager'
//     },
// ])
// db.query(`INSERT INTO employees (manager) VALUES ('${manager.manager}')`
// , (err, res) => {
//     if (err) throw err;
//     console.log(res);
// })
// }

else if (response.options === "Update an employee role") {

}
};

questions();

