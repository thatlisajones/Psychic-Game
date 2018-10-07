var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var computerChoice = letters[Math.floor(Math.random() * letters.length)];

var wins = 0;

var losses = 0;

var guesses = 10;

var lettersGuessed = 

resetGame();
//display();


  document.onkeyup = function(event) {
  var guess = event.key;
  if (guess === computerChoice) {
    win();
  } else if (guesses - 1 === 0) {
    lose();
  } else {
    fail(guess);
  }

  display();
}

//function display() {
  //document.getElementById("wins").innerHTML = wins;
  //document.getElementById("losses").innerHTML = losses;
  //document.getElementById("guesses").innerHTML = guesses;
  //document.getElementById("lettersGuessed").innerHTML = lettersGuessed.join(',');
 
//}

function win() {
  wins++;
  resetGame();
}

function lose() {
  losses++;
  resetGame();
}

function fail(letter) {
  guesses--;
  lettersGuessed.push(letter);
}

function resetGame() {
  guesses = 10;
  lettersGuessed = [];
  computerChoice = letters[Math.floor(Math.random() * letters.length)];
  console.log("Letter to guess: " + computerChoice);
}

//document.getElementById("wins").innerHTML = wins;
//document.getElementById("losses").innerHTML = losses;
//document.getElementById("guesses").innerHTML = guesses;
//document.getElementById("lettersGuessed").innerHTML = lettersGuessed;

