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

	//----------------END OF PROPERTIES

	//METHODS:

	passGen: function(mkPass){

	    var randNum = Math.floor(Math.random() * hangman.passwords.length);
	    hangman.selectedPassword = hangman.passwords[randNum];
	    hangman.selectedPasswordArray = hangman.selectedPassword.split(""); 
	    console.log("current password is: " + hangman.selectedPassword);
	},


	HiddenPasswordGen: function(mkHidPass){
    	for (var i = 0; i < hangman.selectedPassword.length; i++) {

    		hangman.hiddenPassword.push("_");
    	};

        console.log(hangman.hiddenPassword);
	},

	subGuesses: function(subtractGuesses){
		hangman.guessesAllow--;
	},

	addWins: function(addToWins){
		hangman.wins++
	},

	scoreCheck: function(checkForWin){
    	var joinedPass = hangman.selectedPasswordArray.join("");
    	var joinedHiddenPass = hangman.hiddenPassword.join("");

    	if (joinedPass == joinedHiddenPass) {
	        confirm("YOU GOT IT!");
	        hangman.wins++;
	        console.log("Your new score is: " + hangman.wins);
	        hangman.guesses = [];
	        hangman.hiddenPassword = [];
	        hangman.selectedPassword="";
	        hangman.selectedPasswordArray = [];
	        hangman.passGen();
	        hangman.HiddenPasswordGen();
    	};
	},

    resetGame: function(reset){
        hangman.guesses = [];
        hangman.hiddenPassword = [];
        hangman.guessesAllow = 10;
        hangman.passGen();
        hangman.HiddenPasswordGen();
	},
	//----------------END OF METHODS

};
// end of object

window.onload = function(load){

    hangman.passGen();

    hangman.HiddenPasswordGen();

    console.log("Your wins: " + hangman.wins);

    console.log("Incorrect guesses left: " + hangman.guessesAllow);
    };

document.onkeypress = function(startGame){
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

    console.log("Your guesses: " + hangman.guesses);
    console.log(hangman.hiddenPassword);
    console.log("Your wins: " + hangman.wins);
    console.log("You now have " + hangman.guessesAllow + " wrong guesses left");

    hangman.scoreCheck();

};