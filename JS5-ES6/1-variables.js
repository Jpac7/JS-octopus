// ES5
/*var residence = '1548 Andalusian St.';
var monthlyBills = 350;
residence = '42 Rue Cadet';

console.log(residence);
*/ 

// ES6
/*const residence = '1548 Andalusian St.';
let monthlyBills = 350;
monthlyBills = 410;
residence = '42 Rue Cadet';

console.log(residence);
*/

// ES5 - var is function-scoped
/*function isAdult5(age) {
    if (age >= 18) {
        //console.log(name5 + ', ' + age5 + ' years old.');   // --> variables hoisting as undefined
        var name5 = 'Jessica Smooth';
        var age5 = age;
    }

    console.log(name5 + ', ' + age5 + ' years old.');    
}

isAdult5(33);
*/

// ES6 - let and const are block-scoped
/*function isAdult6(age) {
    if (age >= 18) {
        //console.log(name6 + ', ' + age6 + ' years old.');    // -> TEMPORAL-DEAD ZONE - variables hoisted, but can't be accessed before declared
        const name6 = 'Jessica Smooth';
        let age6 = age;
        console.log(name6 + ', ' + age6 + ' years old.');    
    }

    console.log(name6 + ', ' + age6 + ' years old.');    
}

isAdult6(25);
*/

let i = 99;

for (let i = 0; i < 3; i++) {
    console.log(i);
}

console.log(i);

