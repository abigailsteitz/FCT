// Switch to strict mode to get more useful errors when you make mistakes.
'use strict';

function resetResult() {
    document.getElementById("CatResult").style.display = "none";
    document.getElementById("DogResult").style.display = "none";
    document.getElementById("JailResult").style.display = "none";
    document.getElementById("DragonResult").style.display = "none";
}

function seeResult() {
    var Cat = 0;
    var Dog = 0;
    var Jail = 0;
    var Dragon = 0;

    if (document.getElementById("furry").checked) {
        Dog += 1;
    } else if (document.getElementById("scaly").checked) {
        Dragon += 1;
    } else {
        Jail += 1;
        Cat += 1;
    }

    if (document.getElementById("small").checked) {
        Cat += 1;
    } else if (document.getElementById("medium").checked) {
        Dog += 1;
    } else {
        Jail += 1;
        Dragon += 1;
    }

    if (document.getElementById("quiet").checked) {
        Cat += 1;
        Jail += 1;
    } else if (document.getElementById("loud").checked) {
        Dog += 1;
    } else {
        Dragon += 1;
    }

    if (document.getElementById("little").checked) {
        Cat += 1;
    } else if (document.getElementById("lots").checked) {
        Dog += 1;
        Dragon += 1;
    } else {
        Jail += 1;
    }

    if (document.getElementById("Abigail").checked) {
        Cat += 1;
        Dog += 1;
        Dragon += 1;
    } else {
        Jail += 10;
    }


    resetResult();

    if (Cat > Dog && Cat > Jail && Cat > Dragon) {
        document.getElementById("CatResult").style.display = "block";
    } else if (Dog > Cat && Dog > Jail && Dog > Dragon) {
        document.getElementById("DogResult").style.display = "block";
    } else if (Jail > Cat && Jail > Dog && Jail > Dragon) {
        document.getElementById("JailResult").style.display = "block";
    } else {
        document.getElementById("DragonResult").style.display = "block";
    }
}
