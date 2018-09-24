let firstName = 'Melissa';
let lastName = 'Giovanni';
const yearOfBirth = 1978;

function calcAge(year) {
    return 2025 - year;
}

// ES5
console.log(firstName + ' ' + lastName + ' was born in ' + yearOfBirth + '. She is ' + calcAge(yearOfBirth) + ' years old.');

// ES6 - template literals
console.log(`${firstName} ${lastName} was born in ${yearOfBirth}. She is ${calcAge(yearOfBirth)} years old.`);

// new methods
const n = `${firstName} ${lastName}`
console.log(n.startsWith('Mel'));
console.log(n.endsWith('nii'));
console.log(n.includes(' '));
console.log(`${n} `.repeat(3));
