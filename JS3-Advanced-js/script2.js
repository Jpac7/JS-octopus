// Creating objects with Object.create()

// 1st, define the prototype
var personProto = {
    calculateAge: function() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

var sam = Object.create(personProto);
sam.name = 'Samanta';
sam.yearOfBirth = 1982;
sam.job = 'HelpDesk';

var mike = Object.create(personProto, {
    name: {value: 'Mike'},
    yearOfBirth: {value: 1989},
    job: {value: 'Musician'}
})