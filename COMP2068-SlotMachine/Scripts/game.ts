var canvas;
var stage: createjs.Stage;


// Game Objects
var game: createjs.Container;
var background: createjs.Bitmap;
var spinButton: createjs.Bitmap;
var creditButton: createjs.Bitmap;
var resetButton: createjs.Bitmap;
var tiles: createjs.Bitmap[] = [];
var tileContainers: createjs.Bitmap[] = [];

//game variables
var playerMoney = 1000;
var winnings = 0;
var jackpot = 5000;
var turn = 0;
var playerBet = 0;
var winNumber = 0;
var lossNumber = 0;
var spinResult;
var fruits = "";
var winRatio = 0;

//game text
var creditTextBox: createjs.Text;
var payoutTextBox: createjs.Text;
var winTextBox: createjs.Text;
var loseTextBox: createjs.Text;
var gameOverTextBox: createjs.Text;
var betTextBox: createjs.Text;
var jackpotTextBox: createjs.Text;


//slot item variables
var cherries = 0;
var chests = 0;
var moonstones = 0;
var pikachus = 0;
var replays = 0;
var sevens = 0;
var blanks = 0;


function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20); // Enable mouse events
    createjs.Ticker.setFPS(60); // 60 frames per second
    createjs.Ticker.addEventListener("tick", gameLoop);

    main();
}



// Event handlers

function gameLoop() {
    stage.update();
}
//function that will reset the tallies when the spin is complete
function resetFruitTally() {
    cherries = 0;
    chests = 0;
    moonstones = 0;
    pikachus = 0;
    replays = 0;
    sevens = 0;
    blanks = 0;
}

function resetVariables() {
    var playerMoney = 1000;
    var winnings = 0;
    var jackpot = 5000;
    var turn = 0;
    var playerBet = 0;
    var winNumber = 0;
    var lossNumber = 0;
    var spinResult;
    var fruits = "";
    var winRatio = 0;
}
function buttonClicked() {
}
//spin button functions ++++++++++++++++++
function spinbuttonOut() {
    spinButton.alpha = 1.0;
    console.log("mouse out spin");

}
function spinbuttonOver() {
    spinButton.alpha = 0.4;
    console.log("mouse over spin");
}
//reset button functions ++++++++++++++++++++++
function resetbuttonOut() {
    resetButton.alpha = 1.0;
    console.log("mouse out reset");

}
function resetbuttonOver() {
    resetButton.alpha = 0.4;
    console.log("mouse over reset");
}
//credit button functions ++++++++++++++++++++++
function creditbuttonOut() {
    creditButton.alpha = 1.0;
    console.log("mouse out credit");

}
function creditbuttonOver() {
    creditButton.alpha = 0.4;
    console.log("mouse over credit");
}
//actual code stuff


function spinReels() {
    //add code  
    console.log("spin clicked");

    if (playerBet == 0) {
   
    }else {
    spinResult = Reels();
    fruits = spinResult[0] + " - " + spinResult[1] + " - " + spinResult[2];
    console.log(fruits);

           for (var tile = 0; tile < 3; tile++) {
               if (turn > 0) {
                   game.removeChild(tiles[tile]);
               }
               tiles[tile] = new createjs.Bitmap("assets/images/" + spinResult[tile] + ".png");
               tiles[tile].x = 130 + (150 * tile);
               tiles[tile].y = 145;

               game.addChild(tiles[tile]);
               console.log(game.getNumChildren());
           }
    }
}
    //utlility function if a value functions 
    function checkRange(value, lowerBounds, upperBounds) {
        if (value >= lowerBounds && value <= upperBounds) {
            return value;
        }else {
            return !value;
        }
    }

//this function determines the betline results(bar-moonstone-replay)
function Reels() {
    var betLine = [" ", " ", " "];
    var outCome = [0, 0, 0];

    for (var spin = 0; spin < 3; spin++) {
        outCome[spin] = Math.floor((Math.random() * 65) + 1);
        console.log(outCome);
        switch (outCome[spin]) {
            case checkRange(outCome[spin], 1, 27):
                betLine[spin] = "blank1";
                blanks++;
                break;
            case checkRange(outCome[spin], 28, 37):
                betLine[spin] = "chest1";
                chests++;
                break;
            case checkRange(outCome[spin], 38, 46):
                betLine[spin] = "cherry1";
                cherries++;
                break;
            case checkRange(outCome[spin], 47, 54):
                betLine[spin] = "replay1";
                replays++;
                break;
            case checkRange(outCome[spin], 55, 60):
                betLine[spin] = "pikachu1";
                pikachus++;
                break;
            case checkRange(outCome[spin], 61, 64):
                betLine[spin] = "moonstone1";
                moonstones++;
                break;
            case checkRange(outCome[spin], 65, 65):
                betLine[spin] = "seven1";
                sevens++;
                break;
        }
    }
    return betLine;
}

//function to determine the winnings
if (blanks == 0) {
    if (chests == 3) {
        winnings = playerBet * 10;
    }else if (cherries == 3) {
        winnings = playerBet * 20;
    } else if (replays == 3) {
        winnings = playerBet * 30;
    } else if (pikachus == 3) {
        winnings = playerBet * 40;
    } else if (moonstones == 3) {
        winnings = playerBet * 75;
    } else if (sevens == 3) {
        winnings = playerBet * 100;
    } else if (chests == 2) {
        winnings = playerBet * 2;
    } else if (cherries == 2) {
        winnings = playerBet * 3;
    } else if (replays == 2) {
        winnings = playerBet * 4;
    } else if (pikachus == 2) {
        winnings = playerBet * 5;
    } else if (moonstones == 2) {
        winnings = playerBet * 7;
    } else if (sevens == 2) {
        winnings = playerBet * 20;
    } else {
        winnings = playerBet * 1;
    }

    if (sevens == 1) {
        winnings = playerBet * 5;        
    }
    winNumber++;
   showWinMessage();
} else {
    lossNumber++;
   showLossMessage();
    }

function showWinMessage() {
    playerMoney += winnings;
    payoutTextBox.text = winnings.toString();
    resetFruitTally();
    console.log("you won " + winnings + "!");
}
function showLossMessage() {
    console.log("you lost " + playerBet + "!");
    payoutTextBox.text = winnings.toString();
    resetFruitTally();
}
//adds credit to the spin from the player money and will not add if player money is zero
function addCredit() {
    if (playerMoney <= 0) {
        playerMoney = 0;
    }else {
        playerBet += 50
    playerMoney -= 50;
        creditTextBox.text = playerMoney.toString();
        betTextBox.text = playerBet.toString();

    }
    console.log("credit added"); 
}

function resetGame() {
    playerMoney = 1000
    playerBet = 0;
    winnings = 0;
    jackpot = 5000;
    turn = 0;
    playerBet = 0;
    winNumber = 0;
    lossNumber = 0;
    winRatio = 0;
    creditTextBox.text = playerMoney.toString();
    payoutTextBox.text = winnings.toString();
    jackpotTextBox.text = jackpot.toString();
    betTextBox.text = playerBet.toString();


}
//this is the actual UI of the game
function createUI(): void {
    //instantiate background ++++++++++++++++++++++++++++++++++++++++++++++++++
    background = new createjs.Bitmap("assets/images/background1.png");
    game.addChild(background);


    //spin button
    spinButton = new createjs.Bitmap("assets/images/spinButton.png");
    spinButton.x = 255;
    spinButton.y = 310;
    game.addChild(spinButton);

    spinButton.addEventListener("click", spinReels);
    spinButton.addEventListener("mouseover", spinbuttonOver);
    spinButton.addEventListener("mouseout", spinbuttonOut);

    //credit button
    creditButton = new createjs.Bitmap("assets/images/creditButton.png");
    creditButton.x = 155;
    creditButton.y = 310;
    game.addChild(creditButton);

    creditButton.addEventListener("click", addCredit);
    creditButton.addEventListener("mouseover", creditbuttonOver);
    creditButton.addEventListener("mouseout", creditbuttonOut);

    //reset button
    resetButton = new createjs.Bitmap("assets/images/resetButton.png");
    resetButton.x = 355;
    resetButton.y = 310;
    game.addChild(resetButton);

    resetButton.addEventListener("click", resetGame);
    resetButton.addEventListener("mouseover", resetbuttonOver);
    resetButton.addEventListener("mouseout", resetbuttonOut);

    //total credit text
    creditTextBox = new createjs.Text(playerMoney.toString(), "25px Impact", "#FFFF00");
    creditTextBox.x = 205;
    creditTextBox.y = 415;
    game.addChild(creditTextBox);

    //payout credit text
    payoutTextBox = new createjs.Text(winnings.toString(), "25px Impact", "#FFFF00");
    payoutTextBox.x = 405;
    payoutTextBox.y = 415;
    game.addChild(payoutTextBox);

    //bet text
    betTextBox = new createjs.Text(playerBet.toString(), "25px Impact", "#FFFF00");
    betTextBox.x = 215;
    betTextBox.y = 23;
    game.addChild(betTextBox);

    //jackpot text
    jackpotTextBox = new createjs.Text(jackpot.toString(), "25px Impact", "#FFFF00");
    jackpotTextBox.x = 380;
    jackpotTextBox.y = 23;
    game.addChild(jackpotTextBox);


}






// Our Game Kicks off in here
function main() {
    // instantiate my container
    game = new createjs.Container();
    game.x = 23;
    game.y = 6;




    //create User interface
    createUI();


    //comment

    stage.addChild(game);



}