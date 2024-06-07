// Switch to strict mode to get more useful errors when you make mistakes.
'use strict';

function resetResult() {
    document.getElementById("DogResult").style.display = "none";
    document.getElementById("CatResult").style.display = "none";
    document.getElementById("FishResult").style.display = "none";
    document.getElementById("RatResult").style.display = "none";
}

function seeResult() {
    var Dog = 0;
    var Cat = 0;
    var Fish = 0;
    var Rat = 0;

    if (document.getElementById("Lots!").checked) {
        Dog += 1;
    } else if (document.getElementById("A good amount").checked) {
        Cat += 1;
    } else {
        Rat += 1;
        Fish += 1;
    }

    if (document.getElementById("Yes").checked) {
        Fish += 1;
    } else if (document.getElementById("Sometimes").checked) {
        Cat += 1;
        Rat += 1
    } else {
        Dog += 1;
    }

    if (document.getElementById("I want to be around them 24/7!").checked) {
        Dog += 1;
        Rat += 1;
    } else if (document.getElementById("It's ok").checked) {
        Cat += 1;
    } else {
        Fish += 1;
    }

    if (document.getElementById("Yes").checked) {
        Dog += 1;
    } else if (document.getElementById("Medium is better").checked) {
        Cat += 1;
    } else {
        Rat += 1;
        Fish += 1;
    }

    if (document.getElementById("Forever!").checked) {
        Dog += 1;
        Cat += 1;
    } else if (document.getElementById("Not long").checked) {
        Fish += 1;
        Rat += 1;
    }

    if (document.getElementById("Not very active, I like it inside").checked) {
        Fish += 1;
        Rat += 1
    } else if (document.getElementById("I like going on walks sometimes").checked) {
        Cat += 1;
    } else {
        Dog += 1;
    }

    if (document.getElementById("Yes").checked) {
        Dog += 1;
        Cat += 1
    } else {
        Fish += 1;
        Rat += 1;
    }
    
    if (document.getElementById("I hate it").checked) {
        Fish += 1;
    } else if (document.getElementById("It's tolerable").checked) {
        Rat += 1
    } else {
        Dog += 1;
        Cat += 1;
    }

    resetResult();

    if (Dog > Cat && Dog > Fish && Dog > Rat) {
        document.getElementById("DogResult").style.display = "block";
    } else if (Cat > Dog && Cat > Fish && Cat > Rat) {
        document.getElementById("CatResult").style.display = "block";
    } else if (Fish > Dog && Fish > Cat && Fish > Rat) {
        document.getElementById("FishResult").style.display = "block";
    } else {
        document.getElementById("RatResult").style.display = "block";
    }
}
