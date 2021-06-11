let person = { name: "Tom"};
Object.preventExtensions(person);
person.age = 17;
console.log(Object.isExtensible(person));
console.log("age" in person);