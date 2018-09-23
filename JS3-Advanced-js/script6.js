/*
function runTheGame() {
    var score = Math.random() * 10;
    console.log(score >= 5 ? 'You Won!' : 'Game over!')
}
runTheGame();
*/

// Hidding varibles with IIFE (DATA PRIVACY modularity)
(function() {
    var score1 = Math.random() * 10;
    console.log(score1 >= 5 ? 'You Won!' : 'Game over!')
})()

!function(goodLuck) {
    var score2 = Math.random() * 10;
    console.log(score2 >= (5 - goodLuck) ? 'You Won!' : 'Game over!')
}(4)

console.log(score1)
console.log(score2)