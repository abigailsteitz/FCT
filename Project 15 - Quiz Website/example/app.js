// Switch to strict mode to get more useful errors when you make mistakes.
'use strict';

function resetResult() {
    document.getElementById("LAResult").style.display = "none";
    document.getElementById("SeattleResult").style.display = "none";
    document.getElementById("MiamiResult").style.display = "none";
    document.getElementById("ChicagoResult").style.display = "none";
    document.getElementById("SpiderResult").style.display = "none";
}
function seeResult() {
    var Spider = 0;
    var Human = 0;
    var Plankton = 0;
    var Job= 0;
    var Fish= 0;

    if (document.getElementById("8").checked) {
        Spider += 1;
    } else if (document.getElementById("2").checked) {
        Human += 1;
        Fish  += 1;
    } else {
        Plankton += 1;
    }

    if (document.getElementById("Walk").checked) {
        Human += 1;
        Job +=1;
        Spider += 1;
    } else if (document.getElementById("Fly").checked) {
        Job += 1;
    } else {
        Fish += 1;
        Plankton += 1;
    }

    if (document.getElementById("Yes").checked) {
        Human += 1;
        Spider += 1;
    } else if (document.getElementById("No").checked) {
        Fish += 1;
        Plankton += 1;
    } else {
        Job += 1;
    }

    if (document.getElementById("Fight back").checked) {
        Human += 1;
        Spider += 1;
    } else if (document.getElementById("Run").checked) {
        Fish += 1;
        Plankton += 1;
    } else {
        Job += 1;
    }

    if (document.getElementById("Of course").checked) {
        Human += 1;
        Job += 1;
    } else if (document.getElementById("Probably not").checked) {
        Fish += 1;
        Spider += 1;
    } else {
        Plankton += 1;
        Job += 1;
    }

    resetResult();

    if (Fish > Plankton && Fish > Human && Fish > Job && Fish > Spider) {
        document.getElementById("LAResult").style.display = "block";
    } else if (Plankton > Fish && Plankton > Human && Plankton > Job && Plankton > Spider) {
        document.getElementById("SeattleResult").style.display = "block";
    } else if (Human > Fish && Human > Job && Human > Plankton && Human > Spider) {
        document.getElementById("MiamiResult").style.display = "block";
    } else if (Spider > Fish && Spider > Human && Spider > Job && Spider > Plankton) {
        document.getElementById("SpiderResult").style.display = "block";
    } else {
        document.getElementById("ChicagoResult").style.display = "block";
    }
}
