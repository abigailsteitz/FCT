// Switch to strict mode to get more useful errors when you make mistakes.
'use strict';

function resetResult() {
    document.getElementById("UniResult").style.display = "none";
    document.getElementById("DragResult").style.display = "none";
    document.getElementById("PhoResult").style.display = "none";
}

function seeResult() {
    var Unicorn = 0;
    var Dragon = 0;
    var Phoenix = 0;

    if (document.getElementById("Ice Cream").checked) {
        Unicorn += 1;
    } else if (document.getElementById("Cookie").checked) {
        Dragon += 1;
    } else if (document.getElementById("Cake").checked) {
        Phoenix += 1;
    }

    if (document.getElementById("The Forest").checked) {
        Unicorn += 1;
    } else if (document.getElementById("The Mountain").checked) {
        Dragon += 1;
    } else if (document.getElementById("The Beach").checked) {
        Phoenix += 1;
    }

    if (document.getElementById("Purple").checked) {
        Unicorn += 1;
    } else if (document.getElementById("Green").checked) {
        Dragon += 1;
    } else if (document.getElementById("Orange").checked) {
        Phoenix += 1;
    }

    if (document.getElementById("Bag").checked) {
        Unicorn += 1;
    } else if (document.getElementById("Necklace").checked) {
        Dragon += 1;
    } else if (document.getElementById("Hat").checked) {
        Phoenix += 1;
    }

    if (document.getElementById("5").checked) {
        Unicorn += 1;
        Dragon += 1;
        Phoenix += 1;
    } else if (document.getElementById("3").checked) {
        Unicorn += 1;
        Dragon += 1;
        Phoenix += 1;
    } else if (document.getElementById("1").checked) {
        Unicorn += 1;
        Dragon += 1;
        Phoenix += 1;
    }

    resetResult(); 

    if (Unicorn > Dragon && Unicorn> Phoenix ) {
        document.getElementById("UniResult").style.display = "block";
    } else if (Dragon > Unicorn && Dragon > Phoenix) {
        document.getElementById("DragResult").style.display = "block";
    } else if (Dragon == Unicorn && Dragon == Phoenix && Unicorn == Phoenix) {
        document.getElementById("NotResult").style.display = "block";
    } else {
        document.getElementById("PhoResult").style.display = "block";
    }
}
