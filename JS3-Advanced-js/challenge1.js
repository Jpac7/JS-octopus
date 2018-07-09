(function /*game*/ () {
    
    var gameScore = (function () {
        var score = 0
        
        return function(increment) {
            if (increment) score++;
            return score;
        }
        /*return {
            increment: function () {
                score++;
            },
            get: function () {
                return score;
            }
        }*/
    })()
    
    function Question (question, answers, correctAnswer) {
        this.question = question
        this.answers = answers
        this.correctAnswer = correctAnswer
    }
    
    Question.prototype.displayQuestion = function() {        
        console.log(this.question)
        this.answers.forEach(function (answer, index) {
            console.log(index + ': ' + answer)
        })
    }
    
    Question.prototype.checkAnswer = function(answer/*, cb*/) {       
        return answer === this.correctAnswer;
    }
    
    /*
    Question.prototype.displayScore = function(score) {
        console.log('Your current score: ' + score)
        console.log('----------------------------------------------------------')
    }*/
    
    var question1 = new Question('What is the tallest building in the world?', ['Shanghai Tower', 'Eiffel Tower', 'Burj Khalifa'], 2)
    
    var question2 = new Question('How many countries there are in the world?', ['230','195', '206'], 1)
    
    var question3 = new Question('What sport is not officially represented on Winter Olympic games?', ['Curling', 'Ice Hockey', 'Having naps'], 2)
    
    var gameQuestions = [question1, question2, question3];
    
    (function gameTurn() {
        var n = Math.floor(Math.random() * gameQuestions.length)
        gameQuestions[n].displayQuestion()
        var userAnswer = prompt('What is your answer to this question (enter the index)? Or enter quit (or exit) to finish.')
        if (userAnswer !== 'q' && userAnswer !== 'quit' && userAnswer !== 'exit') {            
            var isCorrect = gameQuestions[n].checkAnswer(parseInt(userAnswer))
            if (isCorrect) {
                console.log('Correct answer: ' + gameQuestions[n].answers[userAnswer]);
            } else {
                console.log('Incorrect answer. Try again!');
            }
            var currentScore = gameScore(isCorrect); 
            console.log('Your current score: ' + currentScore)
            console.log('----------------------------------------------------------')
            gameTurn()           
        } else {
            console.log('-----------------------------------------------------')
            //console.log('| God game mate! You finished with ' + gameScore.get() + ' points. |')
            console.log('| God game mate! You finished with ' + gameScore(false) + ' points. |')
            console.log('-----------------------------------------------------')
            
        }                  
        //    gameScore.increment()        
        //console.log('Your current score: ' + gameScore.get())                
    })()
    
            
    /*
    return {
        startGame: gameTurn
    }
    */
})()

/* game().startGame() */