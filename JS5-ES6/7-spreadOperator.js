function addFourAges(a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(81, 31, 16, 24);
console.log(sum1);

// Adding from array
const ages = [81, 31, 16, 24];

// ES5
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

const familyCosta = ['Arthur', 'Mary', 'Lizard', 'John'];
const familyHerrera = ['Carolina', 'Gema', 'Mark', 'Jacky'];
const bigFamily = [...familyCosta, 'Vanessa', ...familyHerrera];
console.log(bigFamily);

// Spreading nodeList
const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

all.forEach(cur => cur.style.color = 'purple');

