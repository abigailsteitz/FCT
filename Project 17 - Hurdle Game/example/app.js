// Switch to strict mode to get more useful errors when you make mistakes.
'use strict';

// The canvas is the black box we draw onto
var canvas = undefined; // Canvas set up when the document is done loading.
// the pen allows you to draw on the canvas
var pen = undefined; // Pen set up when the document is done loading.

// set up variables
var xPosition = 20;
var yPosition = 0;
var ySpeed = 0;
var hurdles = [];
var counter = 0;
var playing = true;
var playerSize = 30;
var hurdleSize = 50;

function drawSquare(xPosition, yPosition, size, color) {
    pen.beginPath();
    pen.rect(xPosition, yPosition, size, size);
    pen.fillStyle = color;
    pen.stroke();
    pen.fill();
}

function keyDownHandler(e) {
    if (e.keyCode == 38) { // up arrow key
        if (yPosition >= (canvas.height - playerSize)) {
            ySpeed -= 19;
        }
    } else if (e.keyCode == 82) { // 'r' for restart
        hurdles.shift();
        playing = true;
        
    }
}

addEventListener("keydown", keyDownHandler, false);

function updatePlayer() {
    ySpeed += Math.random() * 1 + 1.1;
    yPosition += ySpeed;
    if (yPosition >= (canvas.height - playerSize)) {
        ySpeed = Math.random() * 1 + 1.5;
        yPosition = canvas.height - playerSize;
    }
    drawSquare(xPosition, yPosition, playerSize, 'cyan');
}

function createHurdle() {
    var hurdle = {
        xPosition: canvas.width,
        yPosition: canvas.height - hurdleSize
    };
    hurdles.push(hurdle);
}

function updateHurdles() {
    if (counter <= 0) {
        createHurdle();
        counter = Math.floor(Math.random() * 25 + 40);
    }
    counter -= 1;
    for (var i = 0; i < hurdles.length; i++) {
        var hurdle = hurdles[i];
        hurdle.xPosition -= 30;
        drawSquare(hurdle.xPosition, hurdle.yPosition, hurdleSize, 'orange');
    }
}

function checkCollision() {
    for (var i = 0; i < hurdles.length; i++) {
        var hurdle = hurdles[i];
        var playerLeft = xPosition;
        var playerRight = xPosition + playerSize;
        var playerTop = yPosition;
        var playerBottom = yPosition + playerSize;
        var hurdleLeft = hurdle.xPosition;
        var hurdleRight = hurdle.xPosition + hurdleSize;
        var hurdleTop = hurdle.yPosition;
        var hurdleBottom = hurdle.yPosition + hurdleSize;
    
    if(playerRight > hurdleLeft && playerBottom > hurdleTop && playerTop < hurdleBottom && playerLeft < hurdleRight) {
        playing=false}
   
}} 
        /* 
        Write if statements here, using the variables above, 
        to check whether the player and the hurdle are touching
        and set playing to false.
        */
function update() {
    if (playing) {
        pen.clearRect(0, 0, canvas.width, canvas.height);
        updatePlayer();
        updateHurdles();
        checkCollision();
    } else {
        pen.font = "50px Comfortaa";
        pen.fillStyle = "white";
        pen.fillText("GAME OVER, press 'r' to restart", 600, 300);
    }
}

function initialSetup() {
    // set up canvas
    canvas = document.getElementById("canvas");
    canvas.height = 900;
    canvas.width = 1905;

    // set up the pen
    pen = canvas.getContext("2d");

    // Triggers the main function every 10 milliseconds
    setInterval(update, 30);
}

addEventListener("load", (event) => initialSetup())