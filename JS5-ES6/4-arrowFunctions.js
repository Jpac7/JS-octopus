// Arrow functions
const years = [1987, 1956, 1972, 2001, 1995];

// ES5
var ages5 = years.map(function(el) {
    return 2018 - el;
});
//console.log(ages5);

// ES6
let ages6 = years.map(el => 2018 - el);
//console.log(ages6);

ages6 = years.map((el, index) => `Age ${index + 1}: ${2018 - el}`);
//console.log(ages6);

ages6 = years.map((el, index) => {
    const year = new Date().getFullYear();
    const age = year - el;
    return `Age ${index + 1}: ${age}`;
})
//console.log(ages6);

// LEXICAL 'this' VARIABLE - getting 'this' variable from the surroundings
// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        var self = this;

        document.querySelector('.green').addEventListener('click', function() {
            alert('This is box number ' + self.position + ' and is ' + self.color);
        })
    }
}
//box5.clickMe();

// ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', () => 
            alert(`This is box number ${this.position} and is ${this.color}.`)); 
    }
}
box6.clickMe();

/*
const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        document.querySelector('.green').addEventListener('click', () => 
            alert(`This is box number ${this.position} and is ${this.color}.`)); 
    }
}
box66.clickMe();
*/

