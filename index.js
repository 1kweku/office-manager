const inquirer = require('inquirer');

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
    console.log('Success')
}

else if (response.options === "View all roles") {

}

else if (response.options === "View all employees") {

}

else if (response.options === "Add a department") {
const dept = await inquirer.prompt([
    {
    type: 'input',
    message: 'Department name?',
    name: 'dept'
    },
])
}

else if (response.options === "Add a role") {
const roleName = await inquirer.prompt([
    {
    type: 'input',
    message: 'Role name?',
    name: 'roleName'
    },
])
const roleDept = await inquirer.prompt([
    {
    type: 'input',
    message: 'Which department is this role under?',
    name: 'roleDept'
    },
])
const roleSalary = await inquirer.prompt([
    {
    type: 'input',
    message: 'What is this roles salary?',
    name: 'roleSalary'
    },
])
}

else if (response.options === "Add an employee") {
const firstName = await inquirer.prompt([
    {
    type: 'input',
    message: 'What is employees first name?',
    name: 'firstName'
    },
])
const lastName = await inquirer.prompt([
    {
    type: 'input',
    message: 'What is employees last name?',
    name: 'lastName'
    },
])
const title = await inquirer.prompt([
    {
    type: 'input',
    message: 'What is this employees title?',
    name: 'title'
    },
])
const employeeDept = await inquirer.prompt([
    {
    type: 'input',
    message: 'Which department is this employee under?',
    name: 'employeeDept'
    },
])
const salary = await inquirer.prompt([
    {
    type: 'input',
    message: 'What is this employees salary?',
    name: 'salary'
    },
])
const manager = await inquirer.prompt([
    {
    type: 'input',
    message: 'What is this roles salary?',
    name: 'roleSalary'
    },
])
}

else if (response.options === "Update an employee role") {

}
};

questions();