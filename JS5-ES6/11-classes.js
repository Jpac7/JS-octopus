// ES5
var Vehicle5 = function(brand, color, speed) {
    this.brand = brand;
    this.color = color;
    speed === undefined ? this.speed = 0 : this.speed = speed;
}

Vehicle5.prototype.accelerate = function() {
    this.speed += 10;
}

// static method
Vehicle5.doInspection = function(vehicle) {
    console.log('Your ' + vehicle.color + ' ' + vehicle.brand + ' passed the inspection.');
}

var myVehicle5 = new Vehicle5('Honda', 'Blue');
Vehicle5.doInspection(myVehicle5);

// ES6 -- class definitions aren't hoisted. Syntatic sugar to inheritance and prototype chain.
class Vehicle6 {
    constructor(brand, color, speed = 0) {
        this.brand = brand;
        this.color = color;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
    }

    static doInspection(vehicle) {
        console.log('Your ' + vehicle.color + ' ' + vehicle.brand + ' passed the inspection.');
    }
}

const myVehicle6 = new Vehicle5('Mitsubishi', 'White');
Vehicle6.doInspection(myVehicle6);
