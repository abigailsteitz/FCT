// Switch to strict mode to get more useful errors when you make mistakes.
'use strict';

function resetResult() {
    document.getElementById("BloodaResult").style.display = "none";
    document.getElementById("SalamanderResult").style.display = "none";
    document.getElementById("KhorneResult").style.display = "none";
    document.getElementById("SpaceWResult").style.display = "none";
    document.getElementById("IwarriorResult").style.display = "none";
    document.getElementById("NightResult").style.display = "none";
    document.getElementById("UltraResult").style.display = "none";
    document.getElementById("WhiteResult").style.display = "none";
    document.getElementById("BlackLResult").style.display = "none";
    document.getElementById("DeathgResult").style.display = "none";
    document.getElementById("DarkAResult").style.display = "none";
    document.getElementById("AlphaResult").style.display = "none";
}

function seeResult() {
    var Blooda = 0;
    var Salamander = 0;
    var Khorne = 0;
    var SpaceW = 0;
    var Iwarriors = 0;
    var Night = 0;
    var Ultra = 0;
    var White = 0;
    var BlackL = 0;
    var Deathg = 0;
    var DarkA = 0;
    var Alpha = 0;

    if (document.getElementById("hot").checked) {
        Blooda += 1;
        Salamander += 1;
        Khorne += 1;
        Deathg += 1;
    } else if (document.getElementById("cold").checked) {
        SpaceW += 1;
        Night += 1;
        Alpha += 1;
    } else {
        Iwarriors += 1;
        Ultra += 1;
        White += 1;
        BlackL += 1;
        DarkA += 1;
    }

    if (document.getElementById("Axe").checked) {
        Khorne += 1;
        SpaceW += 1;
        Deathg += 1;
    } else if (document.getElementById("Bow").checked) {
        Salamander += 1;
        Iwarriors += 1;
    } else {
        Blooda += 1;
        Night += 1;
        Ultra += 1;
        White += 1;
        BlackL += 1;
        DarkA += 1;
        Alpha += 1;
    }

    if (document.getElementById("Offence").checked) {
        Khorne += 1;
        SpaceW += 1;
        Blooda += 1;
        Night += 1;
        White += 1;
    } else if (document.getElementById("Defence").checked) {
        Deathg += 1;
        Iwarriors += 1;
        DarkA += 1;
    } else {
        Salamander += 1;
        Ultra += 1;
        BlackL += 1;
        Alpha += 1;
    }

    if (document.getElementById("Good").checked) {
        DarkA += 2;
        SpaceW += 2;
        Blooda += 2;
        Salamander += 2;
        Ultra += 2;
        White += 2;
    } else if (document.getElementById("Mediocre").checked) {
        Deathg += 2;
        Iwarriors += 2;
        Khorne += 2;
        Night += 2;
        BlackL += 2;
        Alpha += 2;
    }

    if (document.getElementById("Red").checked) {
        Blooda += 2;
        Khorne += 2;
    } else if (document.getElementById("Blue").checked) {
        Night += 2;
        Alpha += 2;
        SpaceW += 2;
        Ultra += 2;
    } else if (document.getElementById("Green").checked) {
        DarkA += 2;
        Deathg += 2;
        Salamander += 2;
    } else if (document.getElementById("White").checked) {
        White += 2;
    } else if (document.getElementById("Black").checked) {
        Iwarriors += 2;
        BlackL += 2;
    }


    resetResult();

    let max = Math.max(Khorne,SpaceW,Blooda,Night,White,Deathg,Iwarriors,DarkA,Salamander,Ultra,BlackL,Alpha)
    if(max==Khorne){
        document.getElementById("KhorneResult").style.display = "block";
    }
    else if(max==SpaceW){
        document.getElementById("SpaceWResult").style.display = "block";
    }
    else if(max==Blooda){
        document.getElementById("BloodaResult").style.display = "block";
    }
    else if(max==Night){
        document.getElementById("NightResult").style.display = "block";
    }
    else if(max==White){
        document.getElementById("WhiteResult").style.display = "block";
    }
    else if(max==Deathg){
        document.getElementById("DeathgResult").style.display = "block";
    }
    else if(max==Iwarriors){
        document.getElementById("IwarriorResult").style.display = "block";
    }
    else if(max==DarkA){
        document.getElementById("DarkAResult").style.display = "block";
    }
    else if(max==Salamander){
        document.getElementById("SalamanderResult").style.display = "block";
    }
    else if(max==Ultra){
        document.getElementById("UltraResult").style.display = "block";
    }
    else if(max==BlackL){
        document.getElementById("BlackLResult").style.display = "block";
    }
    else if(max==Alpha){
        document.getElementById("AlphaResult").style.display = "block";
    }
}

