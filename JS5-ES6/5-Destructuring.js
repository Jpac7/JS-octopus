// ES5
var mike = ['Mike', 41];
var name5 = mike[0];
var age5 = mike[1];
//console.log(name5);
//console.log(age5);

// ES6
const [name6, age6] = ['Mike', 42];
console.log(name6);
console.log(age6);

const obj = {
    firstName: 'Kim',
    lastName: 'Torat'
}

const { firstName, lastName } = obj;
//console.log(firstName);
//console.log(lastName);

const { firstName: a, lastName: b } = obj;
console.log(a);
console.log(b);

// Getting multiple results from function
function calcYearsRetirement(yearOfBirth) {
    const age = new Date().getFullYear() - yearOfBirth;
    return [age, 66 - age]
}

const [age, remaining] = calcYearsRetirement(1988);
console.log(age);
console.log(remaining);