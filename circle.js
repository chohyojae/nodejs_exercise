function Circle(center, radius) {
    this.center = center;
    this.radius = radius;

     {
        return Math.PI * this.radius * this.radius;
    }
}

Circle.prototype.area = function() {
    return Math.PI * this.radius * this.radius;
}

let c = new Circle({x:0, y:0}, 2.0);
console.log(c);
console.log(c.area());