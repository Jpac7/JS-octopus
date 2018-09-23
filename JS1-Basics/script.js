// Variables basics
/*
var name = 'Peter';
console.log('My name is', name)

var lastName = 'Costa';

console.log(name, lastName)

var age = 29;

console.log(age)

var fullAge = age > 18
console.log(fullAge)
*/

// Variables basics 2
/*
var name = 'Peter'; // declaring variables
var age = 35;

console.log(name + age); // Type Coercion
console.log(age + age);

var job, isMarried;

console.log(job, isMarried)

job = 'plumber';
isMarried = true;

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.') // Type Coercion

// variables mutation
age = 'thirty seven';
job = 'fighter';

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.')


var lastName = prompt('What is the last name?')
console.log(lastName)
console.log('I\'am Released!!')


alert(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.')
*/

// Operators
/*
var ageJohn = 9;
var ageMichel = 90;

var ageJohn = ageMichel = (3+9) * 5 - 8
console.log(ageJohn++)
console.log(++ageMichel)
console.log(ageJohn*=2)
console.log(ageMichel*=2)
*/

// Control structures
/*
var x = 200
if(x == '200') { // '==' operator does type coercion
    console.log('Hello 1! Type coercion just happen')
}

if(x === '200') { // '===' operator does type coercio
    console.log('Hello 2! Type coercion just happen')
}

x = 29

if(x < 20) {
    console.log(x, '< 20');
} else if(x, 'x >= 20 && x < 30') {
    console.log(x, 'x >= 20 && x < 30');
} else {
    console.log(x, '>= 30');
}

var job = 'teacher'

job = prompt('What does John do?')

switch (job) {
    case 'teacher':
        console.log('John teaches kids.');
        break;
    case 'driver':
        console.log('John drives a taxi in London.');
        break;
    case 'cop':
        console.log('John helps fight crime.');
        break;
    default:
        console.log('John does something else.');
}
*/

// Statements and Expressions
// statement function -> doSomething
/*function fun(par) {
    // code
}

// expressions function -> produces a value
var fun = function(par) {
    // code
}
*/
// ARRAYS
// Methods: unshift(), push(), shift(), pop(), indexOf()
/*
var names = ['Timoteo', 'Martins', 'Cabral', 'Pacheco']
var years = new Array(1880, 1956, 1972, 1968)

names[1] = 'Reis'
console.log(names)
console.log(years)

names.push(550)
names.push(years)
names.push(true)
console.log(names)

var lenght = names.unshift('Mr.')
console.log(names, lenght)

var lastRemoved = names.pop()
console.log(lastRemoved)
console.log(names)

var firstRemoved = names.shift()
console.log(firstRemoved)
console.log(names)

var index = names.indexOf('Reis')
console.log('index:', index)

if(names.indexOf('Martins') === -1) {
    console.log('Martins is not in the names array!')
}
*/

// OBJECTS
// Creation with object literal (more common)
/*
var joaquim = {
    name: 'Joaquim',
    lastName: 'Gonzalez',
    yearOfBirth: 1922,
    job: 'Carpenter',
    isMarried: false
};

console.log(joaquim)
console.log(joaquim.name)
console.log(joaquim['lastName']) // -> key as a string

var key = 'job'
console.log(joaquim[key])

// Data mutation
joaquim.yearOfBirth = 1976;
joaquim['job'] = 'Programmer';
console.log(joaquim)

var peter = new Object()
peter.name = 'Peter'
peter.lastName = 'Costa'
peter['yearOfBirth'] = 1988
peter['isMarried'] = false
console.log(peter)


var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Peter', 'Sophie', 'Margarethe'],
    calculateAge: function() {
        this.age = new Date().getFullYear() - this.yearOfBirth;
    }
};

john.calculateAge()
console.log(john)
*/

// Control structures --- LOOPS
// Loops statements: break , continue
/*
var a = ['one', 'first', 'second']
for(var i = 0; i < a.length; i++) {
    console.log(a[i])
}

var i = 0
while(i < a.length) {
    console.log(a[i]);
    i++;
}
*/
/*
for(var i = 1; i <= 5; i++) {
    console.log(i)
    
    if(i === 3) {
        break;
    }
}
    
for(var i = 1; i <= 5; i++) {
    if(i === 3) {
        continue;
    }
    
    console.log(i)
}
*/




