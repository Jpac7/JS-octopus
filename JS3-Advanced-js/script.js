var braga = {
    name: 'Braga',
    habitants: 50000,
    acommodations: 30000,
    universities: 2,
    parks: 3,
    hospitals: 1,
    buildNewHouse: function() {
        this.acommodations++;
    }
}

braga.buildNewHouse();
console.log(braga);
    

// Function constructor
var City = function(name, habitants, houses) {
    this.name = name;
    this.habitants = habitants;
    this.houses = houses;
    /* this.buildNewHouse = function() {
        this.houses++;
    } */
}

// Using constructor prototype to define methods that can be used by all instances inheriting City
// Very common to add methods to constructor prototype, allowing to not replicate the code in all instances and, therefore, using memory more efficiently
City.prototype.buildNewHouse = function() {
    this.houses++;
    return this;
}
    
City.prototype.receiveNewArrival = function() {
    this.habitants++;
    return this;
}

var aveiro = new City('Aveiro', 10000, 9009);
var sintra = new City('Sintra', 10000, 9008);

aveiro.buildNewHouse().receiveNewArrival();
sintra.receiveNewArrival().buildNewHouse().receiveNewArrival();

console.log(aveiro);
console.log(sintra);

console.log(aveiro instanceof City)

console.log(sintra.__proto__ === City.prototype);
console.log(sintra.hasOwnProperty('habitants'))

// --- Arrays (built in constructor, property and prototype)  ---
var myArray = [8, 45, 7];
console.info(myArray);

