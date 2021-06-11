const listEmployee = [
    { name: "hjcho", age: 30, salary: 1000 },
    { name: "jhlee", age: 29, salary: 2000 },
    { name: "jhjoo", age: 37, salary: 3000 },
    { name: "wwjoo", age: 31, salary: 4000 },
    { name: "hslee", age: 33, salary: 5000 },
    { name: "ukjk", age: 50, salary: 6000 },
];

const raisedSalaryList = listEmployee.map(employee => employee.salary * 10);
raisedSalaryList.forEach(value => console.log(value));

const sumSalary = listEmployee.map(employee => employee.salary).reduce((a, b) => (a + b), 0);
console.log(sumSalary);

const sumThirtiesAnnualSalary = listEmployee.filter(employee => (employee.age >= 30 && employee.age < 40))
                            .map(employee => employee.salary).reduce((a, b) => (a + 12*b), 0);
console.log(sumThirtiesAnnualSalary);

const averageThirtiesAnnualSalary = listEmployee.filter(employee => (employee.age >= 30 && employee.age < 40))
.map(employee => employee.salary).reduce((previous, current, index, array) => (previous + (current / array.length)), 0);
console.log(averageThirtiesAnnualSalary);