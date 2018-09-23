
var height1 = 176;
var age1 = 25;

var height2 = 168;
var age2 = 27;

var score1 = height1 + 5 * age1;
var score2 = height2 + 5 * age2;

var winner;
var winnerScore;
if(score1 > score2) {
    console.log('The winner is: player 1, with', score1, 'points.')
} else if(score2 > score1) {
    console.log('The winner is: player 2, with', score2, 'points.')
} else {
    console.log('There is a draw, both with', score2, 'points.')
}

