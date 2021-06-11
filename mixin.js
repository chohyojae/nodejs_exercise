function mixin(target, source) {
    for(let property in source) {
        if(source.hasOwnProperty(property)) {
            target[property] = source[property];
        }
    }
}


let obj1 = {
    a: 1, b:2
}
let obj2 = {
    a: 3, b:4
}

let mixed = mixin(new Object(), obj2);
console.log(obj1);
console.log(obj2);
console.log(mixed);
console.log("-----------------------");

let person1 = {
    _name : "Tom",
    get name() {
        return this._name;
    }
};

let person2 = {};
mixin(person2, person1);

console.log(person1);
console.log(person2);

person2.name = "Huck";
console.log(person2.name);
console.log(person2._name);

function mixin2(target, source) {
    let keys = Object.keys(source);
    for(let i=0; i<keys.length; i++)
    {
        let descriptor = Object.getOwnPropertyDescriptor(source, keys[i]);
        Object.defineProperty(target, keys[i], descriptor);
    }
};

let person3 = {};
mixin2(person3, person1);

console.log(person1);
console.log(person3);

person3.name= "Huck";
console.log(person3.name);
console.log(person3._name); 

let countFruits = /\b(\d+) (apple|peach|orange)s?\b/;
let result = countFruits.exec("apple");
console.log(result);