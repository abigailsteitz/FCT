// Switch to strict mode to get more useful errors when you make mistakes.
'use strict';

function resetResult() {
    document.getElementById("elmoResult").style.display = "none";
    document.getElementById("bigbirdResult").style.display = "none";
    document.getElementById("abbyResult").style.display = "none";
    document.getElementById("oscarResult").style.display = "none";
}

function seeResult() {
    var elmo = 0;
    var bigbird = 0;
    var abby = 0;
    var oscar = 0;

    if (document.getElementById("pikels").checked) {
        elmo += 1;
        bigbird += 1;
    } else if (document.getElementById("icecream").checked) {
        abby += 1;
    } else {
        oscar += 1;
    }

    if (document.getElementById("bus").checked) {
        elmo += 1;
    } else if (document.getElementById("car").checked) {
        bigbird += 1;
    } else {
        abby += 1;
        oscar += 1;
    }

    if (document.getElementById("walk").checked) {
        abby += 1;
        bigbird += 1;
    } else if (document.getElementById("drive").checked) {
        elmo += 1;
    } else {
        oscar += 1;
    }

    resetResult();

    if (elmo > abby && elmo > bigbird && elmo > oscar) {
        document.getElementById("elmoResult").style.display = "block";
    } else if (abby > elmo && abby > bigbird && abby > oscar) {
        document.getElementById("abbyResult").style.display = "block";
    } else if (bigbird > elmo && bigbird > abby && bigbird > oscar) {
        document.getElementById("bigbirgResult").style.display = "block";
    } else {
        document.getElementById("oscarResult").style.display = "block";
    }
}
