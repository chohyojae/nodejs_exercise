var person = Object.defineProperties({}, {
    _name : {
        value: "Tom",
        writable: true,
        enumerable: true,
        configurable: true,    
    },
    name: {
        get: function() {return this._name},
        set: function(value) {
            var str = value.charAt(0).toUpperCase() + value.substring(1);
            this._name = str;
        },
        enumarable: true,
        configurable: true,
    }
});

console.log(Object.getOwnPropertyDescriptor(person, "name"));

let group = {
    groupName: "Tennis circle",
    sayGroupName: function() {
        console.log("belong to " + this.groupName);
    },
};

let person = Object.create(group, {
    
});
