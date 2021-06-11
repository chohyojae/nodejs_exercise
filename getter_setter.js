var person = {
    _name: "Tom",
    get name() {
        return this._name;
    },
    set name(value) {
        this._name = value.charAt(0).toUpperCase() + value.substring(1);
    }
}

var p1 = Object.create(person);
console.log(p1._name);
console.log(p1.name);

var p2 = Object.create(person);
p2.name = "Person";
console.log(p2._name);
console.log(p2.name);
p2._name = "Access";
console.log(p2.name);