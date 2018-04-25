// EXECUTION CONTEXT CREATION
// HOISTING
// for functions, hoisting only works for functions declarations

// in execution phase, the function calculateAge was already stored in the Variable Object(VO) during the creation phase. So we can call it before its definition
/*
calculateAge(1953)

function calculateAge(yearOfBirth) {
    console.log(new Date().getFullYear() - yearOfBirth)
}
*/
// loopUntil(3) // -> is not going to work because loopUntil is declared as a function expression and not as a function declaration
/*
var loopUntil = function(number) {
    for(var i = 0; i < number; i++) {
        console.log(i);
    }
}
*/
// Variables
/*
console.log(age)
var age = 23

printAge();

function printAge() {
    console.log(age)
    var age = 50;
    console.log(age)
    
    printAgeInAYear()
    function printAgeInAYear() {
        console.log(age+1) // --> Lexical scoping
    }
}

console.log(age)
*/

// SCOPE CHAIN
/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();
    
    function second() {
        var c = 'Hey!';
        third();
    }
}
    
function third() {
    var d = 'Arriverdeci!';
    //console.log(c) // --> not acessible in the scope chain
    console.log(a + d)
}
*/

// THE this KEYWORD
/*
console.log(this)

someFunction()

function someFunction() {
    console.log(this);
}

var someObject = {
    prop1: 'some value',
    method1: function() {
        console.log(this)
        console.log(this.prop1)

        var objectThis = this;
        function innerFunction() {
            console.log(this);
            console.log(objectThis)
            console.log(objectThis.prop1)
        } 
        innerFunction()
    }
}

someObject.method1()


var otherObject = {
    prop1: 'other value'
}

// METHOD BORROWING - the this keyword only gets a value as soon as the object call the method/function
otherObject.method1 = someObject.method1

otherObject.method1()
*/








