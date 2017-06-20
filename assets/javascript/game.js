//object begins
var game = {
	wins: 0,
	guesses: 6,
	lettersGuessed: [],
	texas: ["_","_","_","_","_"],
	florida: ["_","_","_","_","_","_","_"],
	maine: ["_","_","_","_","_"],

	//end of variables

	startUp: window.onload = function(pageLoad) {
		//loading initial values
    document.getElementById("winsValue").innerHTML = game.wins;
    document.getElementById("guessesValue").innerHTML = game.guesses;
    document.getElementById("lettersGuessedList").innerHTML = game.lettersGuessed;
    var tex = game.texas[0] + game.texas[1] + game.texas[2] + game.texas[3] + game.texas[4];
    document.getElementById("password").innerHTML = tex;

	},


	startUp: document.onkeyup = function(guessList) {
		//unlock t letter
		var keyChoice = event.key;

        if (keyChoice === "t"){
          game.lettersGuessed.push("T");
        }

    },


// end of object
};









