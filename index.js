let homeScoreEl = document.getElementById("home-score-el");
let guestScoreEl = document.getElementById("guest-score-el");

let homeScore = 0;
let guestScore = 0;

//HOME

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

//GUEST

function addOnePointGuest() {
  guestScore += 1;
  guestScoreEl.innerText = guestScore;
}

function addTwoPointGuest() {
  guestScore += 2;
  guestScoreEl.innerText = guestScore;
}

function addThreePointGuest() {
  guestScore += 3;
  guestScoreEl.innerText = guestScore;
}

let guestAddOne = document.getElementById("guest-add-one");
guestAddOne.addEventListener("click", addOnePointGuest);

let guestAddTwo = document.getElementById("guest-add-two");
guestAddTwo.addEventListener("click", addTwoPointGuest);

let guestAddThree = document.getElementById("guest-add-three");
guestAddThree.addEventListener("click", addThreePointGuest);
