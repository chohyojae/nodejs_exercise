var person1 = {
    name : "Tom",
    get name() {
        return this.name;
    },
    sayHello : function() {
        console.log("Hello! " + this.name);
    }
};

var person2 = Object.create(person1);
person2.name = "Huck";
person2.sayHello();
