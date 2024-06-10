// Switch to strict mode to get more useful errors when you make mistakes.
'use strict';

function resetResult() {
    document.getElementById("MazdaResult").style.display = "none";
    document.getElementById("FordResult").style.display = "none";
    document.getElementById("ATVResult").style.display = "none";
}

function seeResult() {
    var Mazda = 0;
    var Ford = 0;
    var ATV = 0;

    if (document.getElementById("small").checked) {
        ATV += 1;
    } else if (document.getElementById("medium").checked) {
        Mazda += 1;
    } else {
        Ford += 1;
    }

    if (document.getElementById("inline4").checked) {
        Mazda += 1;
    } else if (document.getElementById("v8").checked) {
        Ford += 1;
    } else {
        ATV += 1;
    }

    if (document.getElementById("quiet").checked) {
        Mazda += 1;
    } else if (document.getElementById("loud").checked) {
        ATV += 1;
    } else {
        Ford += 1;
    }

    if (document.getElementById("standard").checked) {
        Ford += 1;
    } else if (document.getElementById("premium").checked) {
        Mazda += 1;
    } else {
        ATV += 1;
    }

    if (document.getElementById("mountians").checked) {
        Ford += 1;
    } else if (document.getElementById("forest").checked) {
        ATV += 1;
    } else {
        Mazda += 1;
    }

    resetResult();

    if (Mazda > Ford && Mazda > ATV) {
        document.getElementById("MazdaResult").style.display = "block";
    } else if (Ford > Mazda && Ford > ATV) {
        document.getElementById("FordResult").style.display = "block";
    } else {
        document.getElementById("ATVResult").style.display = "block";
    }
}
