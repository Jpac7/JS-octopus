// Primitives and Objects

// Mutation for variables holding values vs holding references
// Primitives -- imutable, create copy.
var a = 50;
var b = a;
a = 25;
console.log('a = ', a);
console.log('b = ', b);

// Objects
var person1 = {
    name: 'Beatrix',
    age: 33
}
var person2 = person1;
person1.age = 37;
console.log('person1 age = ', person1.age);
console.log('person2 age = ', person2.age);


var primitive = 99;
var reference = {
    prop1: 99,
    prop2: 'providence or atoms'
}
// Functions
function change(p1, p2) {
    p1 = 10;
    p2.prop1 = 20;
    console.log('fun context p1 = ', p1);
}

change(primitive, reference);
console.log('primitive', primitive);
console.log('reference', reference.prop1);