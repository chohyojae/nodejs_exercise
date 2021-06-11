const listEmployee = [
    { name: "hjcho", age: 30, salary: 1000 },
    { name: "jhlee", age: 29, salary: 2000 },
    { name: "jhjoo", age: 37, salary: 3000 },
    { name: "wwjoo", age: 31, salary: 4000 },
    { name: "hslee", age: 33, salary: 5000 },
    { name: "ukjk", age: 50, salary: 6000 },
];

const fs = require('fs');

fs.writeFile("./employee.json", JSON.stringify(listEmployee), () => {
    console.log("saved.");

    fs.readFile("./employee.json", (err, data) => {
        if(err) {
            console.log(err);
        }
        else {
            const readFromFile = JSON.parse(data.toString());
            console.log(readFromFile);
        }
    })
});

