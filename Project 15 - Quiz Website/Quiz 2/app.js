// Switch to strict mode to get more useful errors when you make mistakes.
'use strict';

function resetResult() {
    document.getElementById("BikeResult").style.display = "none";
    document.getElementById("ClownResult").style.display = "none";
    document.getElementById("FerrariResult").style.display = "none";
    document.getElementById("KidResult").style.display = "none";
    document.getElementById("JeepResult").style.display = "none";
    document.getElementById("MonsterResult").style.display = "none";
}

function seeResult() {
    var Bike = 0;
    var Clown = 0;
    var Ferrari = 0;
    var Kid = 0;
    var Jeep = 0;
    var Monster = 0;

    if (document.getElementById("red").checked) {
        Clown += 1;
        Ferrari += 1;
        Kid += 1;
    } else if (document.getElementById("pink").checked) {
        Jeep += 1;
    } else if (document.getElementById("green").checked) {
        Monster += 1;
    } else {
        Bike += 1;
    }

    if (document.getElementById("run").checked) {
        Monster += 1;
    } else if (document.getElementById("show").checked) {
        Ferrari += 1;
    } else if (document.getElementById("places").checked) {
        Bike += 1;
        Kid += 1;
    } else if (document.getElementById("friends").checked) {
        Clown += 1;
    } else {
        Jeep += 1;
    }

    if (document.getElementById("me").checked) {
        Bike += 1;
        Kid += 1;
    } else if (document.getElementById("two").checked) {
        Jeep += 1;
        Monster += 1;
    } else if (document.getElementById("no one").checked) {
        Ferrari += 1;
    } else {
        Clown += 1;
    }

    if (document.getElementById("park").checked) {
        Bike += 1;
        Jeep += 1;
    } else if (document.getElementById("junk").checked) {
        Monster += 1;
    } else if (document.getElementById("mcdonalds").checked) {
        Kid += 1;
    } else if (document.getElementById("circus").checked) {
        Clown += 1;
    } else {
        Ferrari += 1;    
    }

    if (document.getElementById("eat").checked) {
        Kid += 1;
    } else if (document.getElementById("friends").checked) {
        Clown += 1;
        Jeep += 1;
    } else if (document.getElementById("nothing").checked) {
        Ferrari += 1;
    } else if (document.getElementById("music").checked) {
        Bike += 1;
    } else {
        Monster += 1;   
    } 

    resetResult();

    if (Clown > Bike && Clown > Ferrari && Clown > Kid && Clown > Jeep && Clown > Monster) {
        document.getElementById("ClownResult").style.display = "block";
    } else if (Ferrari > Bike && Ferrari > Clown && Ferrari > Kid && Ferrari > Jeep && Ferrari > Monster) {
        document.getElementById("FerrariResult").style.display = "block";
    } else if (Kid > Bike && Kid > Ferrari && Kid > Clown && Kid > Jeep && Kid > Monster) {
        document.getElementById("KidResult").style.display = "block";
    } else if (Bike > Clown && Bike > Ferrari && Bike > Kid && Bike > Jeep && Bike > Monster) {
        document.getElementById("BikeResult").style.display = "block";
    } else if (Monster > Bike && Monster > Ferrari && Monster > Kid && Monster > Jeep && Monster > Clown) {
        document.getElementById("MonsterResult").style.display = "block";
    } else {
        document.getElementById("JeepResult").style.display = "block";
    }
}
