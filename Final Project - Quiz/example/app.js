// Switch to strict mode to get more useful errors when you make mistakes.
'use strict';

function resetResult() {
    document.getElementById("RedResult").style.display = "none";
    document.getElementById("PinkResult").style.display = "none";
    document.getElementById("BlueResult").style.display = "none";
    document.getElementById("SilverResult").style.display = "none";
}

function seeResult() {
    var Red = 0;
    var Pink = 0;
    var Blue = 0;
    var Silver = 0;

    if (document.getElementById("warm").checked) {
        Red += 1;
        Pink += 1;
    } else if (document.getElementById("cool").checked) {
        Blue += 1;
    } else {
        Silver += 1;
    }

    if (document.getElementById("fall").checked) {
        Red += 1;
    } else if (document.getElementById("winter").checked) {
        Silver += 1;
    } else if (document.getElementById("spring").checked) {
        Pink += 1;
    } else {
        Blue += 1;
        
    }

    if (document.getElementById("gold").checked) {
        Red += 1;
        Silver += 1;
    } else if (document.getElementById("silver").checked) {
        Blue += 1;
    } else {
        Pink += 1;
    }

    if (document.getElementById("math").checked) {
        Silver += 1;
    } else if (document.getElementById("english").checked) {
        Pink += 1;
    } else {
        Red += 1;
        Blue += 1;
    }

    if (document.getElementById("visual").checked) {
        Pink += 1;
        Silver += 1;
    } else if (document.getElementById("perform").checked) {
        Red += 1;
    } else {
        Blue += 1;
    }
    resetResult();

    if (Red > Pink && Red > Blue && Red > Silver) {
        document.getElementById("RedResult").style.display = "block";
    } else if (Pink > Red && Pink > Blue && Pink > Silver) {
        document.getElementById("PinkResult").style.display = "block";
    } else if (Blue > Red && Blue > Silver && Blue > Pink) {
        document.getElementById("BlueResult").style.display = "block";
    } else {
        document.getElementById("SilverResult").style.display = "block";
    }
}
