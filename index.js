var randomNumber1 = Math.ceil(Math.random() * 6);
var randomDiceImage = "dice" + randomNumber1 + ".png";
document.querySelector(".img1").src = "images/" + randomDiceImage;

var randomNumber2 = Math.ceil(Math.random() * 6);
randomDiceImage = "dice" + randomNumber2 + ".png";
document.querySelector(".img2").src = "images/" + randomDiceImage;

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Play 1 wins!";
} else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 wins!";
}else {
  document.querySelector("h1").innerHTML = "Draw!";
}
