'use strict';

function resetResult() {
    document.getElementById("BelleResult").style.display = "none";
    document.getElementById("AuroraResult").style.display = "none";
    document.getElementById("JasmineResult").style.display = "none";
    document.getElementById("SnowWhiteResult").style.display = "none";
}

function seeResult() {
    var Belle = 0;
    var Aurora = 0;
    var Jasmine = 0;
    var SnowWhite = 0;

    if (document.getElementById("Starbucks").checked) {
        Aurora += 1;
    } else if (document.getElementById("DunkinDonuts").checked) {
        SnowWhite += 1;
    } else if (document.getElementById("DutchBros").checked) {
        Belle += 1;
    } else {
        Jasmine += 1;
    }

    if (document.getElementById("Subway").checked) {
        Belle += 1;
    } else if (document.getElementById("JimmyJohns").checked) {
        Jasmine += 1;
    } else if (document.getElementById("JerseyMikes").checked) {
        SnowWhite += 1;
    } else {
        Aurora += 1;
    }

    if (document.getElementById("Pagliacci").checked) {
        SnowWhite += 1;
    } else if (document.getElementById("Dominos").checked) {
        Belle += 1;
    } else if (document.getElementById("PizzaHut").checked) {
        Jasmine += 1;
    } else {
        Aurora += 1;
    }

    if (document.getElementById("McDonalds").checked) {
        Jasmine += 1;
    } else if (document.getElementById("BurgerKing").checked) {
        Aurora += 1;
    } else if (document.getElementById("ShakeShack").checked) {
        SnowWhite += 1;
    } else {
        Belle += 1;
    }

    if (document.getElementById("DairyQueen").checked) {
        Aurora += 1;
    } else if (document.getElementById("BenNJerrys").checked) {
        SnowWhite += 1;
    } else if (document.getElementById("HaagenDazs").checked) {
        Belle += 1;
    } else {
        Jasmine += 1;
    }

    resetResult();

    if (Belle > SnowWhite && Belle > Jasmine && Belle > Aurora) {
        document.getElementById("BelleResult").style.display = "block";
    } else if (Aurora > Belle && Aurora > Jasmine && Aurora > SnowWhite) {
        document.getElementById("AuroraResult").style.display = "block";
    } else if (Jasmine > Belle && Jasmine > SnowWhite && Jasmine > Aurora) {
        document.getElementById("JasmineResult").style.display = "block";
    } else {
        document.getElementById("SnowWhiteResult").style.display = "block";
    }
}
