// let person1 = { name : "Tom", age : 17 };
// let person2 = Object.create(person1);
// person2.name = "Huck";
// for(let p in person2) {
//     console.log(p);
// }

// let a = [0, 2, 4, 6, 8];
// a.name = "evens";

// for(let i in a) {
//     console.log(i);
// }

let group = { groupName : "Tennis circle", };
let person = Object.create(group);
person.name = "Tom";
person.age = 30;
person.sayHello = function() {
    console.log("Hello! " + this.name);
}
Object.defineProperty(person, "sayHello" , {enumerable : false});
console.log(Object.values(person));

let p = Object.keys(person);
for(let i=0; i<p.length; i++) {
    console.log(person[p[i]]);
}

console.log(Object.getOwnPropertyNames(person));

