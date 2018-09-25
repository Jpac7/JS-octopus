const boxes = document.querySelectorAll('.box');

// ES5

var boxesArr5 = Array.prototype.slice.call(boxes);
/*
boxesArr5.forEach(function(cur) {   
    cur.style.backgroundColor = 'dodgerblue';
});
*/

// ES6
const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach((cur) => cur.style.backgroundColor = 'dodgerblue');

// ES5
/*
for (var i = 0; i < boxesArr5.length; i++) {
    if (boxesArr5[i].className === 'box blue') {
        continue;
    }

    boxesArr5[i].textContent = 'Changed to blue!';
}
*/

// ES6
for (const box of boxesArr6) {
    if (box.className.includes('blue')) {
        continue;
    }
    
    box.textContent = 'Changed to blue!'; 
}

// Methods to find pos. and el.
var ages = [15, 16, 11, 31, 9, 10];

// ES5
var full = ages.map(function(el) {
    return el >= 18;
});
console.log(full);
var pos = full.indexOf(true);
//console.log('pos: ' + pos);
//console.log('el: ' + ages[pos]);

// ES6
const pos2 = ages.findIndex(el => el >= 18);
console.log(`pos: ${pos2}`);
const value = ages.find(el => el >= 18);
console.log(`el: ${value}`);


