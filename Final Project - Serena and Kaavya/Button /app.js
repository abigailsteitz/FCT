// Switch to strict mode to get more useful errors when you make mistakes.
'use strict';

function secretMessage() {
    alert("You have unlocked the secret message!")
}
function displayCar() {
    document.getElementById("CarContent").style.display = "block";
    document.getElementById("DrinkContent").style.display = "none";
    document.getElementById("defaultContent").style.display = "none";
}
function displayDrink() {
    document.getElementById("CarContent").style.display = "none";
    document.getElementById("DrinkContent").style.display = "block";
    document.getElementById("defaultContent").style.display = "none";
}
function blueBackground() {
    document.body.style.backgroundColor = "blue";
    console.log(document)
}

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

function resetResult() {
    document.getElementById("SmoothieResult").style.display = "none";
    document.getElementById("SwampResult").style.display = "none";
    document.getElementById("WaterResult").style.display = "none";
    document.getElementById("TempleResult").style.display = "none";
}

function seeResult() {
    var Smoothie = 0;
    var Swamp = 0;
    var Water = 0;
    var Temple = 0;

    if (document.getElementById("hot").checked) {
        Smoothie += 1;
        Water += 1;
    } else if (document.getElementById("cold").checked) {
        Swamp += 1;
    } else {
        Temple += 1;
    }

    if (document.getElementById("pink").checked) {
        Temple += 1;
    } else if (document.getElementById("blue").checked) {
        Water += 1;
    } else if (document.getElementById("green").checked) {
        Swamp += 1;
    } else {
        Smoothie += 1;
    }

    if (document.getElementById("chocolate").checked) {
        Smoothie += 1;
    } else if (document.getElementById("gummy").checked) {
        Temple += 1;
    } else if (document.getElementById("sour").checked) {
        Water += 1;
    } else {
        Swamp += 1;
    }

    if (document.getElementById("beach").checked) {
        Smoothie += 1;
    } else if (document.getElementById("mountain").checked) {
        Water += 1;
    } else if (document.getElementById("forest").checked) {
        Swamp += 1;
    } else {
        Temple += 1;

    }
    if (document.getElementById("hiking").checked) {
        Swamp += 1;
    } else if (document.getElementById("sports").checked) {
        Water += 1;
    } else if (document.getElementById("friends").checked) {
        Temple += 1;
    } else {
        Smoothie += 1;
    }
    
    

    resetResult();

    if (Smoothie > Swamp && Smoothie > Water && Smoothie > Temple) {
        document.getElementById("SmoothieResult").style.display = "block";
    } else if (Swamp > Smoothie && Swamp > Water && Swamp > Temple) {
        document.getElementById("SwampResult").style.display = "block";
    } else if (Water > Smoothie && Water > Swamp && Water > Temple) {
        document.getElementById("WaterResult").style.display = "block";
    } else {
        document.getElementById("TempleResult").style.display = "block";
    }
}