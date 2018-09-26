const question = new Map();

question.set('question', 'What is the official name of the latest major Javascript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer! :D');
question.set(false, 'Wrong, please try again.');

console.log(question.get('question'));
//console.log(question.get(3));

//console.log(`Size: ${question.size}`)

if (question.has(4)) {
    //console.log('Map has key 4');
    // question.delete(4);
}

//question.clear();

//question.forEach((value, key) => console.log(`Key ${key} set to '${value}'`));

// Destructuring the [key, value] variables 
for (const [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('Write your answer:'));
console.log(question.get(ans === question.get('correct')));
