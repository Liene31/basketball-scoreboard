let homeScoreEl = document.getElementById("home-score-el");
let guestScoreEl = document.getElementById("guest-score-el");

let homeScore = 0;
let guestScore = 0;

function addOnePointHome() {
  homeScore += 1;
  homeScoreEl.innerText = homeScore;
}

function addTwoPointHome() {
  homeScore += 2;
  homeScoreEl.innerText = homeScore;
}

function addThreePointHome() {
  homeScore += 3;
  homeScoreEl.innerText = homeScore;
}

let homeAddOne = document.getElementById("home-add-one");
homeAddOne.addEventListener("click", addOnePointHome);

let homeAddTwo = document.getElementById("home-add-two");
homeAddTwo.addEventListener("click", addTwoPointHome);

let homeAddThree = document.getElementById("home-add-three");
homeAddThree.addEventListener("click", addThreePointHome);
