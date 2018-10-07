var wins = 0;

var losses = 0;

var guesses = 10;

var lettersGuessed = []

// Computer selects letter at random.

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    
// User guesses a letter by pressing a key. Show letters guessed. If the letter matches computer, increment wins. Else, decrement guesses. If guesses equal zero, increment losses.

document.onkeypress = function(event) {
    var userGuess = event.key;
   lettersGuessed.push(userGuess);

        if (userGuess === computerChoice) {
            wins++;
            guesses = 10;
            lettersGuessed = [];
            computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        } else {
            guesses--;
        }
        if (guesses === 0) {
            losses++;
            guesses = 10;
            lettersGuessed = [];
            computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

        }
// Show wins, losses, guesses, and letters on scoreboard.

document.getElementById("wins").textContent = "Wins: " + wins;
document.getElementById("losses").textContent = "Losses: " + losses;
document.getElementById("guesses").textContent = "Guesses: " + guesses;
document.getElementById("lettersGuessed").textContent = "Letters guessed: " + lettersGuessed.join(',');

};