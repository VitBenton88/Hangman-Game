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

	    var randNum = Math.floor(Math.random() * this.passwords.length);
	    var hintID = document.getElementById("hint");
	    this.selectedPassword = this.passwords[randNum];
	    this.selectedPasswordArray = this.selectedPassword.split(""); 
	    console.log("current password: " + this.selectedPassword);

	    	//hint generator:

	    if(this.selectedPassword == this.passwords[0]){
	    		hintID.innerHTML = "Hint:<br>Things are always bigger here ...";
	    };

	    if(this.selectedPassword == this.passwords[1]){
	    		hintID.innerHTML = "Hint:<br> The sunshine state!";
	    };

	    if(this.selectedPassword == this.passwords[2]){
	    		hintID.innerHTML = "Hint:<br> The Space Needle is Located in this state.";
	    };

	    if(this.selectedPassword == this.passwords[3]){
	    		hintID.innerHTML = "Hint:<br> Peaches!";
	    };

	    if(this.selectedPassword == this.passwords[4]){
	    		hintID.innerHTML = "Hint:<br> Forrest Gump";
	    };

	    if(this.selectedPassword == this.passwords[5]){
	    		hintID.innerHTML = "Hint:<br> The 49th state of the U.S.";
	    };

	    if(this.selectedPassword == this.passwords[6]){
	    		hintID.innerHTML = "Hint:<br> Potatoes!";
	    };

	    if(this.selectedPassword == this.passwords[7]){
	    		hintID.innerHTML = "Hint:<br> Capital city is Richmond";
	    };

	    if(this.selectedPassword == this.passwords[8]){
	    		hintID.innerHTML = "Hint:<br>Go Lions!";
	    };

	    if(this.selectedPassword == this.passwords[9]){
	    		hintID.innerHTML = "Hint:<br> Yosemite National Park is located in this state.";
	    };

	    if(this.selectedPassword == this.passwords[10]){
	    		hintID.innerHTML = "Hint:<br> Cheeseheads!";
	    };

	    if(this.selectedPassword == this.passwords[11]){
	    		hintID.innerHTML = "Hint:<br> Between California and Washington state";
	    };

	    if(this.selectedPassword == this.passwords[12]){
	    		hintID.innerHTML = "Hint:<br> viva Las Vegas!";
	    };

	    if(this.selectedPassword == this.passwords[13]){
	    		hintID.innerHTML = "Hint:<br> The city of Tulsa is located in this state.";
	    };

	    if(this.selectedPassword == this.passwords[14]){
	    		hintID.innerHTML = "Hint:<br> the 50th state!";
	    };

	    if(this.selectedPassword == this.passwords[15]){
	    		hintID.innerHTML = "Hint:<br> Go Vikings!";
	    };

	    if(this.selectedPassword == this.passwords[16]){
	    		hintID.innerHTML = "Hint:<br> Their fried chicken is the delicious!";
	    };

	    if(this.selectedPassword == this.passwords[17]){
	    		hintID.innerHTML = "Hint:<br> Capital city is Harrisburg";
	    };

	    if(this.selectedPassword == this.passwords[18]){
	    		hintID.innerHTML = "Hint:<br> Capital city is Harrisburg";
	    };

	    if(this.selectedPassword == this.passwords[17]){
	    		hintID.innerHTML = "Hint:<br> MIT is located in this state";
	    };

	    if(this.selectedPassword == this.passwords[19]){
	    		hintID.innerHTML = "Hint:<br> Thw Windy City is located in this state.";
	    };

	    if(this.selectedPassword == this.passwords[20]){
	    		hintID.innerHTML = "Hint:<br> The rockies!";
	    };

	    if(this.selectedPassword == this.passwords[21]){
	    		hintID.innerHTML = "Hint:<br> The Music City is located in this state.";
	    };

	    //end of hint generator
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
		    var passwordID = document.getElementById("password");
		    var guessesListID = document.getElementById("lettersGuessedList");
		    passwordID.innerHTML = this.hiddenPassword.join("");
		    guessesListID.innerHTML = "Your guesses: " + this.guesses;

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