// Switch to strict mode to get more useful errors when you make mistakes.
'use strict';

function secretMessage() {
    alert("You have unlocked the secret message!")
}
function displayDog() {
    document.getElementById("dogContent").style.display = "block";
    document.getElementById("foxContent").style.display = "none";
    document.getElementById("defaultContent").style.display = "none";
}
function displayFox() {
    document.getElementById("dogContent").style.display = "none";
    document.getElementById("foxContent").style.display = "block";
    document.getElementById("defaultContent").style.display = "none";
}
function blueBackground() {
    document.body.style.backgroundColor = "blue";
    console.log(document)
}