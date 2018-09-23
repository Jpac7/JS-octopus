var yearsOfBirth = [1988, 1978, 1933, 1947, 2013]

var a = []
for(var i = 0; i < yearsOfBirth.length; i++) {
    a.push(yearsOfBirth[i])
}

var i = 0
while(i < a.length) {
    var age = new Date().getFullYear() - a[i]
    var isFullAge = age >= 18
    console.log(isFullAge, age)
    i++
}

function printFullAge(years) {
    var fullAges = []
    fullAges.length = years.length
    var i = 0
    while(i < years.length) {
        var age = new Date().getFullYear() - years[i]
        var isFullAge = age >= 18
        fullAges[i] = isFullAge
        console.log(isFullAge, age)
        i++
    } 
    return fullAges
}

var yearsOfBirth1 = [1988, 1978, 1933, 1947, 2013]
var yearsOfBirth2 = [1988, 2001, 1933, 1947, 2013]
var full_1 = printFullAge(yearsOfBirth1)
var full_2 = printFullAge(yearsOfBirth2)
console.log(full_1)
console.log(full_2)