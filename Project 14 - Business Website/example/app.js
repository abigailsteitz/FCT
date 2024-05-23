// Switch to strict mode to get more useful errors when you make mistakes.
'use strict';

function secretMessage() {
    alert("If you like purple, choose taro. If you like brown better, choose milk tea.")
}
function displayDog() {
    document.getElementById("Taro").style.display = "block";
    document.getElementById("Milktea").style.display = "none";
    document.getElementById("defaultContent").style.display = "none";
}
function displayCat() {
    document.getElementById("Taro").style.display = "none";
    document.getElementById("Milktea").style.display = "block";
    document.getElementById("defaultContent").style.display = "none";
}
function blueBackground() {
    document.body.style.backgroundColor = "blue";
    console.log(document)
}