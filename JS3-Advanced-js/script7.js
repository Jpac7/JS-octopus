// CLOSURES

function retirement(retirementAge) {
    var currentYear = new Date().getFullYear();    
    var c = ' years left until retirement.';
    
    return function(yearOfBirth) {
        var age = currentYear - yearOfBirth;        
        console.log(retirementAge - age + c)            
    }
}

var retirementUS = retirement(67)
var retirementSwitzerland = retirement(65)
var retirementUK = retirement(66)

retirementUS(2000)
retirementSwitzerland(1987)
retirementUK(1990)
retirementUS(1990)
retirementSwitzerland(1990)

function interviewQuestion(job) {
    var question;
    
    switch (job) {
        case 'designer':
            question = '%s can you please explain what UX design is?';
            break;
        case 'teacher':
            question = 'What subject do you teach %s?';
            break;
        default:
            question = 'Hello %s, what do you do?';           
    }
       
    return function(name) {
        console.log(question, name)
    }    
}

var plumberQuestion = interviewQuestion('plumber')
var teacherQuestion = interviewQuestion('teacher')
var designerQuestion = interviewQuestion('designer')

plumberQuestion('Martin')
teacherQuestion('Isabella')
designerQuestion('Alfred')
teacherQuestion('Peter')


var citiesQuery = (function(dbTable) {
    var query = 'Select * from ' + dbTable + ' where';
    
    return function(params) {        
        Object.keys(params).forEach(function(param) {
            query += param + '=' + params[param] + ';'
        })
        console.log(query)        
    }
})('cities')

citiesQuery({city: 'berlin', city: 'praga', city: 'moscow'})
citiesQuery({city: 'hamburg', city: 'luanda'})

