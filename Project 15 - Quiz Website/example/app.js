// Switch to strict mode to get more useful errors when you make mistakes.
'use strict';

function resetResult() {
    document.getElementById("DiorResult").style.display = "none";
    document.getElementById("FentiResult").style.display = "none";
    document.getElementById("KidResult").style.display = "none";
    document.getElementById("TGlowResult").style.display = "none";
    document.getElementById("FatResult").style.display = "none";
    document.getElementById("GothResult").style.display = "none";
    document.getElementById("FortniteResult").style.display = "none";
    document.getElementById("LawnmowerResult").style.display = "none";

}

function seeResult() {
    var Dior = 0;
    var Fenti = 0;
    var Kid = 0;
    var TGlow = 0;
    var Fat = 0;
    var Goth = 0;
    var Fortnite = 0;
    var Lawnmower = 0;

    if (document.getElementById("rich").checked) {
        Dior += 1;
        Fenti += 1;
        Goth +=1;
    } else if (document.getElementById("medium").checked) {
        TGlow += 1;
        Fat += 1;
    } else {
        Kid += 1;
        Fortnite +=1;
        Lawnmower += 1;

    }

    if (document.getElementById("summer").checked) {
        TGlow += 1;
        Fortnite += 1;
        Fat += 1;
    } else if (document.getElementById("winter").checked) {
        Dior += 1;
        Goth += 1; 
    } else {
        Kid += 1;
        Fenti += 1;
        Lawnmower +=1;
            }

    if (document.getElementById("Nuggets").checked) {
        Kid += 1;
        Fortnite += 1;
        Fat +=1;
    } else if (document.getElementById("Caviar").checked) {
        Dior += 1;
        Goth += 1;
    } else {
        Fenti += 1;
        TGlow += 1;
        Lawnmower += 1;
    }

    if (document.getElementById("Castle").checked) {
        Dior += 1;
        TGlow += 1;
        Goth += 1;
    } else if (document.getElementById("Modern").checked) {
        Fenti += 1;
        Fortnite += 1;
        Lawnmower += 1;
    } else {
        Kid += 1;
        Fat +=1;
    }

    if (document.getElementById("Bigger").checked) {
        Fat += 10;
    } else if (document.getElementById("Average").checked) {
        TGlow += 1;
        Fortnite += 1;
        Kid +=1;
        Lawnmower += 1;
    } else {
        Goth += 1;
        Fenti +=1;
        Dior +=1;
    }

    if (document.getElementById("Sporty").checked) {
        Fortnite += 1;
        Kid += 1;
        Fat +=1;
    } else if (document.getElementById("Basic").checked) {
        TGlow += 1;
        Dior += 1;
        Fenti += 1;
    } else {
        Goth += 1;
        Lawnmower +=1;
    }

    if (document.getElementById("Mind").checked) {
        Dior += 1;
        Fenti += 1;
        Goth += 1;
    } else if (document.getElementById("Shapeshift").checked) {
        Fenti += 1;
        Fortnite += 1;
        Fat += 1;
    } else {
        Kid += 1;
        TGlow +=1;
    }

    if (document.getElementById("Floral").checked) {
        Dior += 1;
        Goth += 1;
    } else if (document.getElementById("Coconut").checked) {
        TGlow += 1;
        Lawnmower += 1;
    } else if (document.getElementById("Vanilla").checked) {
        Fenti += 1;
        Fat += 1;
    } else {
        Kid += 1;
        Fortnite +=1;
    }


    resetResult();

    if (Dior > Fenti && Dior > Kid && Dior > TGlow && Dior > Fat && Dior > Goth && Dior > Fortnite && Dior > Lawnmower) {
        document.getElementById("DiorResult").style.display = "block";
    } else if (Fenti > Dior && Fenti > Kid && Fenti > TGlow && Fenti > Goth && Fenti > Fat && Fenti > Fortnite && Fenti > Lawnmower) {
        document.getElementById("FentiResult").style.display = "block";
    } else if (Kid > Dior && Kid > Fenti && Kid > TGlow && Kid > Fat && Kid > Goth && Kid > Fortnite && Kid > Lawnmower) {
        document.getElementById("KidResult").style.display = "block";
    } else if (Goth > Dior && Goth > Kid && Goth > TGlow && Goth > Fenti && Goth > Fat && Goth > Fortnite && Goth > Lawnmower) {
        document.getElementById("GothResult").style.display = "block";
    } else if (Fat > Dior && Fat > Kid && Fat > TGlow && Fat > Goth && Fat > Fenti && Fat > Fortnite && Fat > Lawnmower) {
        document.getElementById("FatResult").style.display = "block";
    } else if (Fortnite > Dior && Fortnite > Kid && Fortnite > TGlow && Fortnite > Goth && Fortnite > Fat && Fortnite > Fenti && Fortnite > Lawnmower) {
        document.getElementById("FortniteResult").style.display = "block";
    } else if (TGlow > Dior && TGlow > Kid && TGlow > Fenti && TGlow > Goth && TGlow > Fat && TGlow > Fortnite && TGlow > Lawnmower) {
        document.getElementById("TGlowResult").style.display = "block";
    } else {
        document.getElementById("LawnmowerResult").style.display = "block";
    }
}t