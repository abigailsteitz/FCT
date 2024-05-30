// Switch to strict mode to get more useful errors when you make mistakes.
'use strict';

function secretMessage() {
    alert("Click here for a free coupon code!")
}
function displayYes() {
    document.getElementById("Yes").style.display = "block";
    document.getElementById("No").style.display = "none";
    document.getElementById("defaultContent").style.display = "none";
}
function displayNo() {
    document.getElementById("dogContent").style.display = "none";
    document.getElementById("catContent").style.display = "block";
    document.getElementById("defaultContent").style.display = "none";
}
function redBackground() {
    document.body.style.backgroundColor = "Green";
    console.log(document)
}