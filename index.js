let homeScore = 0;
let guestScore = 0;

let homeScoreBoard = document.getElementById("homeScore");
let guestScoreBoard = document.getElementById("guestScore");

function homeAddScore(addNum){
    homeScore += addNum;
    homeScoreBoard.textContent = homeScore; //print
}

function guestAddScore(addNum){
    guestScore += addNum;
    guestScoreBoard.textContent = guestScore; //print
}

function refreshGame(){
    homeScore = 0;
    guestScore = 0;
    homeScoreBoard.textContent = 0;
    guestScoreBoard.textContent = 0;
}