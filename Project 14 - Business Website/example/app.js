// Switch to strict mode to get more useful errors when you make mistakes.
'use strict';

function secretMessage() {
    alert("Wrong button? Why even try that?")
}
function displayJam() {
    document.getElementById("jamContent").style.display = "block";
    document.getElementById("butterContent").style.display = "none";
    document.getElementById("defaultContent").style.display = "none";
}
function displayButter() {
    document.getElementById("jamContent").style.display = "none";
    document.getElementById("butterContent").style.display = "block";
    document.getElementById("defaultContent").style.display = "none";
}
