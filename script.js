let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomDiceImg1 = "dice" + randomNumber1 + ".png"; // dice1.png
let randomDiceImg2 = "dice" + randomNumber2 + ".png";

let randomImgSource1 = "images/" + randomDiceImg1;
let randomImgSource2 = "images/" + randomDiceImg2;

let image1 = document.querySelectorAll("img")[0];
let image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImgSource1);
image2.setAttribute("src", randomImgSource2);

// If Players 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🏆 Player 1 Wins";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins 🏆";
} else {
  document.querySelector("h1").innerHTML = "Draw!!";
}
