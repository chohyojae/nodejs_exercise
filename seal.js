let person = {name: "Tom",};
Object.seal(person);
person.age = 17;
delete person.name;

Object.defineProperty(person, "name", {enumerable : false});
console.log("name" in person);
console.log("age" in person);
console.log(Object.getOwnPropertyDescriptor(person, "name"));

person.name = "Huck";
console.log(person);