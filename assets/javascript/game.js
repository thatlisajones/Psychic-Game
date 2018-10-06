var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guessesLeft, guessedLetters, letterToGuess;

resetGame();
display();

document.onkeyup = function(event) {
  var guess = event.key;
  if (guess === letterToGuess) {
    win();
  } else if (guessesLeft - 1 == 0) {
    lost();
  } else {
    fail(guess);
  }

  display();
}

function display() {
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("losses").innerHTML = losses;
  document.getElementById("guessLeft").innerHTML = guessesLeft;
  document.getElementById("guessed").innerHTML = guessedLetters.join(',');
 
}

function win() {
  wins++;
  resetGame();
}

function lost() {
  loses++;
  resetGame();
}

function fail(letter) {
  guessesLeft--;
  guessedLetters.push(letter);
}

function resetGame() {
  guessesLeft = 13;
  guessedLetters = [];
  letterToGuess = letters[Math.floor(Math.random() * letters.length)];
  console.log("Letter to guess: " + letterToGuess);
}
