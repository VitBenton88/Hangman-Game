//object begins
var hangman = {

	//PROPERTIES:
	wins: 0,
	guessesAllow: 10,
	passwords: ["texas","florida","washington","georgia","alabama","alaska","idaho","virginia","michigan","california","wisconsin","oregon","nevada","oklahoma","hawaii","minnesota","kentucky","pennsylvania","massachusetts","illinois","colorado","tennessee"],
    selectedPassword:"",
    selectedPasswordArray: [],
	guesses: [],
	hiddenPassword: [],
	winsID: document.getElementById("wins"),

	//----------------END OF PROPERTIES

	//METHODS:

	passGen: function(mkPass){

	    var randNum = Math.floor(Math.random() * this.passwords.length);
	    this.selectedPassword = this.passwords[randNum];
	    this.selectedPasswordArray = this.selectedPassword.split(""); 
	    console.log("current password is: " + this.selectedPassword);
	},


	HiddenPasswordGen: function(mkHidPass){
    	for (var i = 0; i < this.selectedPassword.length; i++) {

    		this.hiddenPassword.push("_");
    	};
	},

	subGuesses: function(subtractGuesses){
		this.guessesAllow--;
	},

	addWins: function(addToWins){
		this.wins++
	},

	scoreCheck: function(checkForWin){
    	var joinedPass = this.selectedPasswordArray.join("");
    	var joinedHiddenPass = this.hiddenPassword.join("");
    	var winsID = document.getElementById("wins");

    	if (joinedPass == joinedHiddenPass) {
	        confirm("YOU GOT IT!");
	        this.wins++;
	        winsID.innerHTML = "Your wins: " + this.wins;
	        this.guesses = [];
	        this.hiddenPassword = [];
	        this.selectedPassword="";
	        this.selectedPasswordArray = [];
	        this.guessesAllow = 10;
	        this.passGen();
	        this.HiddenPasswordGen();
    	};
	},

    resetGame: function(reset){
        this.guesses = [];
        this.hiddenPassword = [];
        this.guessesAllow = 10;
        this.wins = 0;
        this.passGen();
        this.HiddenPasswordGen();
	},
	//----------------END OF METHODS

};
// end of object

window.onload = function(load){

	var winsID = document.getElementById("wins");
	var guessesID = document.getElementById("guesses");
	var guessesListID = document.getElementById("lettersGuessedList");
	var passwordID = document.getElementById("password");
	var winsID = document.getElementById("wins");

    hangman.passGen();

    hangman.HiddenPasswordGen();

    winsID.innerHTML = "Your wins: " + hangman.wins;

    guessesID.innerHTML = "Incorrect Guesses Left: " + hangman.guessesAllow;
    };

document.onkeypress = function(startGame){

	var winsID = document.getElementById("wins");
	var guessesID = document.getElementById("guesses");
	var guessesListID = document.getElementById("lettersGuessedList");
	var passwordID = document.getElementById("password");
	var winsID = document.getElementById("wins");

	var keyChoice = event.key;
	var missed = true;
	hangman.guesses.push(keyChoice);

	for (var i = 0; i < hangman.selectedPassword.length; i++) {

    	if (keyChoice == hangman.selectedPassword.charAt(i)){
        	hangman.hiddenPassword[i] = hangman.selectedPassword[i];
            missed = false;
        };
    };

    if (missed){
    	hangman.subGuesses();
    };

    if (hangman.guessesAllow === 0){
    	var confLoss = confirm("GAME OVER: You ran out of guesses!");
     };

    if (confLoss == true){
        hangman.resetGame();
    };

    guessesListID.innerHTML = "Your guesses: " + hangman.guesses;
    passwordID.innerHTML = hangman.hiddenPassword.join("");
    winsID.innerHTML = "Your wins: " + hangman.wins;
    guessesID.innerHTML = "Incorrect Guesses Left: " + hangman.guessesAllow;

    hangman.scoreCheck();

};