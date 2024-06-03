// Switch to strict mode to get more useful errors when you make mistakes.
'use strict';

function resetResult() {
    document.getElementById("PlasticResult").style.display = "none";
    document.getElementById("WoodenResult").style.display = "none";
    document.getElementById("MetalResult").style.display = "none";
    document.getElementById("TableResult").style.display = "none";
}

function seeResult() {
    var Plastic = 0;
    var Wooden = 0;
    var Metal = 0;
    var Table = 0;

    if (document.getElementById("summ").checked) {
        Plastic += 1;
    } else if (document.getElementById("wint").checked) {
        Wooden += 1;
    } else if (document.getElementById("spring").checked) {
        Metal += 1;
    } else {
        Table += 1;
    }

    if (document.getElementById("Break").checked) {
        Plastic += 1;
    } else if (document.getElementById("Lunch").checked) {
        Metal += 1;
    } else if (document.getElementById("Dinner").checked) {
        Wooden += 1;
    } else {
        Table += 1;
    }

    if (document.getElementById("blond").checked) {
        Plastic += 1;
    } else if (document.getElementById("brown").checked) {
        Wooden += 1;
    } else if (document.getElementById("black").checked) {
            Metal += 1;
    } else {
        Table += 1;
    }
    if (document.getElementById("red").checked) {
        Plastic += 1;
    } else if (document.getElementById("yellow").checked) {
        Wooden += 1;
    } else if (document.getElementById("blue").checked) {
            Metal += 1;
    } else {
        Table += 1;   
    }
     if (document.getElementById("blob").checked) {
        Plastic += 1;
    } else if (document.getElementById("trout").checked) {
        Wooden += 1;
    } else if (document.getElementById("rock").checked) {
            Metal += 1;
    } else {
        Table += 1;

     
    }

    resetResult();

    if (Plastic > Wooden && Plastic > Metal && Plastic > Table) {
        document.getElementById("PlasticResult").style.display = "block";
    } else if (Wooden > Plastic && Wooden > Metal && Wooden > Table) {
        document.getElementById("WoodenResult").style.display = "block";
    } else if (Metal > Plastic && Metal > Wooden && Metal > Table) {
        document.getElementById("MetalResult").style.display = "block";
    } else {
        document.getElementById("TableResult").style.display = "block";
    }
}
