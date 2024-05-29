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
        Lorax += 1;
    } else if (document.getElementById("pink").checked) {
        Cat += 1;
    } else if (document.getElementById("red").checked) {
        Alpha += 1;
    } else {
        Rizzler += 1;
    }

    if (document.getElementById("omegas").checked) {
        Alpha += 1;
    } else if (document.getElementById("twizzlers").checked) {
        Rizzler += 1;
    } else if (document.getElementById("truffula").checked) {
        Lorax += 1;
    } else if (document.getElementById("licorice").checked) {
        Emo += 1;
    } else {
        Cat += 1;
    }

    if (document.getElementById("cry").checked) {
        Emo += 1;
    } else if (document.getElementById("anime").checked) {
        Cat += 1;
    } else if (document.getElementById("trees").checked) {
        Lorax += 1;
    } else if (document.getElementById("quick").checked) {
        Rizzler += 1;
    } else {
        Alpha += 1;
    }

    if (document.getElementById("cave").checked) {
        Emo += 1;
    } else if (document.getElementById("Tokyo").checked) {
        Cat += 1;
    } else if (document.getElementById("thneedville").checked) {
        Lorax += 1;
    } else if (document.getElementById("beach").checked) {
        Rizzler += 1;
    } else {
        Alpha += 1;    
    }

    if (document.getElementById("hug").checked) {
        Lorax += 1;
    } else if (document.getElementById("gyatt").checked) {
        Rizzler += 1;
    } else if (document.getElementById("sigma").checked) {
        Alpha += 1;
    } else if (document.getElementById("shy").checked) {
        Cat += 1;
    } else {
        Emo += 1;   
    } 

    resetResult();

    if (Lorax > Rizzler && Lorax > Emo && Lorax > Cat && Lorax > Alpha) {
        document.getElementById("LoraxResult").style.display = "block";
    } else if (Rizzler > Lorax && Rizzler > Emo && Rizzler > Cat && Rizzler > Alpha) {
        document.getElementById("RizzlerResult").style.display = "block";
    } else if (Emo > Rizzler && Emo > Lorax && Emo > Cat && Emo > Alpha) {
        document.getElementById("EmoResult").style.display = "block";
    } else if (Cat > Rizzler && Cat > Lorax && Cat > Emo && Cat > Alpha) {
        document.getElementById("CatResult").style.display = "block";
    } else {
        document.getElementById("AlphaResult").style.display = "block";
    }
}
