let obj = {};
Object.defineProperty(obj, "name", {
    value: "Tom",
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(obj,"age", {
    value: 1,
    writable: true,
    enumerable: false,
    configurable: false
});

console.log(Object.getOwnPropertyDescriptor(obj, "name"));
console.log(obj.name);
console.log(obj.age);

obj.name = "Thomas"
obj.age = "2";

console.log(obj.name);
console.log(obj.age);

Object.defineProperty(obj, "name", {configurable : false});
Object.defineProperty(obj, "name", {writable : false});
obj.name = "Hyojae";

console.log(obj.name);