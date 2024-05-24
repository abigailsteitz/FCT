// Switch to strict mode to get more useful errors when you make mistakes.
'use strict';

function resetResult() {
    document.getElementById("AlphaResult").style.display = "none";
    document.getElementById("CatResult").style.display = "none";
    document.getElementById("EmoResult").style.display = "none";
    document.getElementById("LoraxResult").style.display = "none";
    document.getElementById("RizzlerResult").style.display = "none";
}

function seeResult() {
    var Alpha = 0;
    var Cat = 0;
    var Emo = 0;
    var Lorax = 0;
    var Rizzler = 0;

    if (document.getElementById("black").checked) {
        Emo += 1;
    } else if (document.getElementById("orange").checked) {
        Chicago += 1;
    } else if (document.getElementById("orange").checked) {
        Chicago += 1;
    } else if (document.getElementById("orange").checked) {
        Chicago += 1;
    } else if (document.getElementById("orange").checked) {
        Chicago += 1;

    if (document.getElementById("black").checked) {
        Emo += 1;
    } else if (document.getElementById("orange").checked) {
        Chicago += 1;
    } else if (document.getElementById("orange").checked) {
        Chicago += 1;
    } else if (document.getElementById("orange").checked) {
        Chicago += 1;
    } else if (document.getElementById("orange").checked) {
        Chicago += 1;

    if (document.getElementById("black").checked) {
        Emo += 1;
    } else if (document.getElementById("orange").checked) {
        Chicago += 1;
    } else if (document.getElementById("orange").checked) {
        Chicago += 1;
    } else if (document.getElementById("orange").checked) {
        Chicago += 1;
    } else if (document.getElementById("orange").checked) {
        Chicago += 1;    

    if (document.getElementById("black").checked) {
        Emo += 1;
    } else if (document.getElementById("orange").checked) {
        Chicago += 1;
    } else if (document.getElementById("orange").checked) {
        Chicago += 1;
    } else if (document.getElementById("orange").checked) {
        Chicago += 1;
    } else if (document.getElementById("orange").checked) {
        Chicago += 1;    

    if (document.getElementById("black").checked) {
        Emo += 1;
    } else if (document.getElementById("orange").checked) {
        Chicago += 1;
    } else if (document.getElementById("orange").checked) {
        Chicago += 1;
    } else if (document.getElementById("orange").checked) {
        Chicago += 1;
    } else if (document.getElementById("orange").checked) {
        Chicago += 1;    


    resetResult();

    if (LA > Seattle && LA > Miami && LA > Chicago) {
        document.getElementById("LAResult").style.display = "block";
    } else if (Seattle > LA && Seattle > Miami && Seattle > Chicago) {
        document.getElementById("SeattleResult").style.display = "block";
    } else if (Miami > LA && Miami > Seattle && Miami > Chicago) {
        document.getElementById("MiamiResult").style.display = "block";
    } else {
        document.getElementById("ChicagoResult").style.display = "block";
    }
}
