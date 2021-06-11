var person = (function() {
    var _name = "NAME";
    return {
        get name() {
            return _name;
        },
        set name(value) {
            _name = value.charAt(0).toUpperCase() + value.substring(1);
        }
    };
})();

console.log(person.name);
console.log(person._name);

person.name = "2";
console.log(person.name);
console.log(person._name);

person._name = "1";
console.log(person.name);
console.log(person._name);

