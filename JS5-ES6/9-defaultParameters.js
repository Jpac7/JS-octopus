// ES5
function FahrenheitFamily(firstName, yearOfBirth, lastName, nationality) {
    if (lastName === undefined) lastName = 'Fahrenheit';
    if (nationality === undefined) nationality = 'German';

    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

const mark = new FahrenheitFamily('Mark', 1967);
const susan = new FahrenheitFamily('Susane', 1991, 'Gómez', 'Colombian');

// ES6
function PascalFamily(firstName, yearOfBirth, lastName = 'Pascal', nationality = 'French') {
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

const emilio = new PascalFamily('Emílio', 1988);
const pierre = new PascalFamily('Pierre', 1987, 'François', 'Belgium');
