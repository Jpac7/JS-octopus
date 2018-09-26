// ES5
// x, y represents the position
var Shape5 = function(x, y) {
    this.x = x;
    this.y = y;
}

Shape5.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
    console.log('Move: [' + x + ', ' + y + ']');
}

var Circle5 = function(x, y, r) {
    Shape5.call(this, x, y);
    this.r = r;
}

// Inheritance defined here
Circle5.prototype = Object.create(Shape5.prototype);
// OPTIONAL: Recovering constructor function overwritten by previous prototype assignment
Circle5.prototype.constructor = Circle5;

Circle5.prototype.calcArea = function() {
    var area = 2 * Math.PI * this.r;
    console.log(area)
}

var circ1 = new Circle5(0, 0, 4);
circ1.move(2, 2);
circ1.calcArea();

// ES6
class Shape6 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    move(x, y) {
        this.x += x;
        this.y += y;
        console.log(`Move: [${x}, ${y}]`);
    }
}

class Circle6 extends Shape6 {
    constructor(x, y, r) {
        super(x, y);
        this.r = r;
    }

    calcArea() {
        const area = 2 * Math.PI * this.r;
        console.log(area);
    }
}

const circ2 = new Circle6(1, 2, 10);
circ2.move(2, 8);
circ2.calcArea();

