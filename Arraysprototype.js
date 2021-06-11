let a = ["A", "B", "C", "D"];
a.splice(1,2, "X", "Y", "Z");
console.log(a);

a = a.concat([["D", "E"]]);
console.log(a);


let people = [
    {name : "Tom", age : 17},
    {name : "Huck", age: 19},
    {name : "Becky", age: 18},
];

let names = people.map(person => person.name);
let ages = people.map(person => person.age);

console.log(names);
console.log(ages);

let nameLen = people.map(person => person.name).map(name => name.length);
console.log(nameLen);

let b = [1, 2, 3, 4, 5];
console.log(b.reduce(function(prev, value) {return prev + value}));
console.log(b.reduce(function(prev, value) {return prev + value}));
console.log(b.reduce(function(prev, value) {return prev + value}));
console.log(b.reduce(function(prev, value) {return prev + value}));
console.log(b.reduce(function(prev, value) {return prev + value}));

console.log(b.reduce((prev, value) => prev + value, 0));
console.log(b.reduce((prev, value) => prev + value, 0));
console.log(b.reduce((prev, value) => prev + value, 0));
console.log(b.reduce((prev, value) => prev + value, 0));
console.log(b.reduce((prev, value) => prev + value, 0));
