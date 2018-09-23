// Bind, Call & Apply
// Method Borrowing

var londonZoo = {
    name: 'London Zoo',
    location: 'London',
    species: { elephants: 3, lions: 2, penguins: 2, parrots: 4 },  
    addAnimals: function (specie, number) {
        if(this.species.hasOwnProperty(specie)) {
            this.species[specie] += number  
        } else {
            this.species[specie] = number
        }
        console.log('There are ' + this.species[specie] + ' ' + specie + ' now in ' + this.name + '.');
    }
}

londonZoo.addAnimals('wolfs', 5)
londonZoo.addAnimals('wolfs', 5)
londonZoo.addAnimals('lions', 10)

var amazonRainforest = {
    name: 'Amazon Rainforest',
    location: 'South America',
    species: { jaguars: 100, anacondas: 200, dolphins: 120 }    
}

londonZoo.addAnimals.call(amazonRainforest, 'dolphins', 15)
londonZoo.addAnimals.apply(amazonRainforest, ['sloths', 38]) // --> arguments passed in array

// Creating a copy of function with predefined arguments
var addAnts = londonZoo.addAnimals.bind(londonZoo, 'ants')

addAnts(200000)
addAnts(500)

var addDolphins = londonZoo.addAnimals.bind(amazonRainforest, 'dolphins')
addDolphins(30)

// ------------------------ Predefining function parameters with function.prototype.bind() --------------------------------------

var yearsOfBirth = [1999, 1987, 2000, 1972, 1988]

function arrayCalc(arr, fn) {
    var resultsArr = [];
    for(var i = 0; i < arr.length; i++) {
        resultsArr.push(fn(arr[i]));
    }
    return resultsArr;
}

function calculateAge(yearsOfBirth) {
    return new Date().getFullYear() - yearsOfBirth;    
}

function isFullAge(limit, age) {
    return age >= limit
}

var ages = arrayCalc(yearsOfBirth, calculateAge)
console.log('ages:', ages)

var isFullAgeInJapan = arrayCalc(ages, isFullAge.bind(null, 20))
console.log('isFullAgeInJapan:', isFullAgeInJapan)


