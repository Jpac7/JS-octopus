function game () {
    
    var gameQuestions = []
    
    var gameScore = (function () {
        var score = 0
        
        return {
            increment: function () {
                score += 1
            },
            get: function () {
                return score;
            }
        }
    })()
    
    var Question = function (question, answers, correctAnswer) {
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
    
    Question.prototype.isAnswerCorrect = function(answer) {       
        return this.correctAnswer === answer;        
    }
    
    var gameTurn = function() {
        var questionIndex = Math.floor(Math.random() * gameQuestions.length)
        gameQuestions[questionIndex].displayQuestion()
        var userAnswer = prompt('What is your answer to this question (enter the index)? Or enter quit (or exit) to finish.')
        if (userAnswer === 'q' || userAnswer === 'quit' || userAnswer === 'exit') {
            console.log('-----------------------------------------------------')
            console.log('| God game mate! You have finished it with ' + gameScore.get() + ' points. |')
            console.log('-----------------------------------------------------')
            return;
        }
        if (gameQuestions[questionIndex].isAnswerCorrect(Number(userAnswer))) {
            gameScore.increment()
            console.log('Correct answer: ' + gameQuestions[questionIndex].answers[Number(userAnswer)])
        } else {
            console.log('Incorrect answer. Try again!')
        }    
        console.log('Your current score: ' + gameScore.get())
        console.log('----------------------------------------------------------')
        gameTurn()        
    }
    
    var question1 = new Question('What is the tallest building in the world?', ['Shanghai Tower', 'Eiffel Tower', 'Burj Khalifa'], 2)
    gameQuestions.push(question1)
    
    var question2 = new Question('How many countries there are in the world?', ['230','195', '206'], 1)
    gameQuestions.push(question2)
    
    var question3 = new Question('What sport is not officially represented on Winter Olympic games?', ['Curling', 'Ice Hockey', 'Having naps'], 2)
    gameQuestions.push(question3)        
            
    return {
        startGame: gameTurn
    }
}

game().startGame()