var canvas;
var playerMoney = 1000;
var stage: createjs.Stage;
var spinButton;
var creditButton;
var resetButton;
var cherry;
var chest;
var pikachu;
var moonstone;
var replay;
var seven;
var fruits;


// Game Objects
var game: createjs.Container;
var background: createjs.Bitmap;
var spinBUtton: createjs.Bitmap;
var tiles: createjs.Bitmap[] = [];

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

function spinReels() {
    //add code  
    console.log("spin clicked");
}

function addCredit() {
    //add code
    console.log("credit added");
}

function resetGame() {
    //add code
    console.log("game reset");
}

function createUI(): void {
    //instantiate background
    background = new createjs.Bitmap("assets/images/background.png");
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