// Switch to strict mode to get more useful errors when you make mistakes.
'use strict';

function resetResult() {
    document.getElementById("DiorResult").style.display = "none";
    document.getElementById("FentiResult").style.display = "none";
    document.getElementById("KidResult").style.display = "none";
    document.getElementById("TGlowResult").style.display = "none";
}

function seeResult() {
    var Dior = 0;
    var Fenti = 0;
    var Kid = 0;
    var TGlow = 0;

    if (document.getElementById("rich").checked) {
        Dior += 1;
        Fenti += 1;
    } else if (document.getElementById("medium").checked) {
        TGlow += 1;
    } else {
        Kid += 1;
    }

    if (document.getElementById("summer").checked) {
        TGlow += 1;
        Fenti += 1;
    } else if (document.getElementById("winter").checked) {
        Dior += 1;
    } else {
        Kid += 1;
            }

    if (document.getElementById("Nuggets").checked) {
        Kid += 1;
    } else if (document.getElementById("Caviar").checked) {
        Dior += 1;
    } else {
        Fenti += 1;
        TGlow += 1;
    }

    if (document.getElementById("Castle").checked) {
        Dior += 1;
        TGlow += 1;
    } else if (document.getElementById("Modern").checked) {
        Fenti += 1;
    } else {
        Kid += 1;
    }

    if (document.getElementById("Floral").checked) {
        Dior += 1;
    } else if (document.getElementById("Coconut").checked) {
        TGlow += 1;
    } else if (document.getElementById("Vanilla").checked) {
        Fenti += 1;
    } else {
        Kid += 1;
    }


    resetResult();

    if (Dior > Fenti && Dior > Kid && Dior > TGlow) {
        document.getElementById("DiorResult").style.display = "block";
    } else if (Fenti > Dior && Fenti > Kid && Fenti > TGlow) {
        document.getElementById("FentiResult").style.display = "block";
    } else if (Kid > Dior && Kid > Fenti && Kid > TGlow) {
        document.getElementById("KidResult").style.display = "block";
    } else {
        document.getElementById("TGlowResult").style.display = "block";
    }
}
