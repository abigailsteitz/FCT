'use strict';

function resetResult() {
    document.getElementById("CountryResult").style.display = "none";
    document.getElementById("PopResult").style.display = "none";
    document.getElementById("RapResult").style.display = "none";
    document.getElementById("AlternativeResult").style.display = "none";
    document.getElementById("RnBResult").style.display = "none";
}

function seeResult() {
    var Country = 0;
    var Pop = 0;
    var Rap = 0;
    var Alternative = 0;
    var RnB = 0;

    if (document.getElementById("theweeknd").checked) {
        RnB += 1;
    } else if (document.getElementById("taylorswift").checked) {
        Pop += 1;
    } else if (document.getElementById("postmalone").checked) {
        Rap += 1;
    } else if (document.getElementById("billieeilish").checked) {
        Alternative += 1;
    } else if (document.getElementById("rihanna").checked) {
        Pop += 1;
    }

    if (document.getElementById("taylorSwift").checked) {
        Pop += 1;
    } else if (document.getElementById("drake").checked) {
        Rap += 1;
    } else if (document.getElementById("badbunny").checked) {
        RnB += 1;
    } else if (document.getElementById("theWeeknd").checked) {
        RnB += 1;
    } else if (document.getElementById("edsheeran").checked) {
        Pop += 1;
    } 

    if (document.getElementById("macklemore").checked) {
        Rap += 1;
    } else if (document.getElementById("coldplay").checked) {
        Pop += 1;
    } else if (document.getElementById("eminem").checked) {
        Rap += 1;
    } else if (document.getElementById("katyperry").checked) {
        Pop += 1;
    } else if (document.getElementById("avicii").checked) {
        Country += 1;
    }

    if (document.getElementById("driverslicense").checked) {
        Alternative += 1;
    } else if (document.getElementById("kissmemore").checked) {
        Rap += 1;
    } else if (document.getElementById("dancemonkey").checked) {
        Country += 1;
    } else if (document.getElementById("telepatia").checked) {
        RnB += 1;
    } else if (document.getElementById("myuniverse").checked) {
        Pop += 1;
    }

    if (document.getElementById("michaeljackson").checked) {
        Pop += 1;
    } else if (document.getElementById("kanye").checked) {
        Rap += 1;
    } else if (document.getElementById("rkelly").checked) {
        Rap += 1;
    } else if (document.getElementById("lanadelrey").checked) {
        Alternative += 1;
    } else if (document.getElementById("morganwallen").checked) {
        Country += 1;
    }

    if (document.getElementById("cottagecore").checked) {
        Pop += 2;
    } else if (document.getElementById("y2k").checked) {
        Rap += 2;
    } else if (document.getElementById("indie").checked) {
        RnB += 2;
    } else if (document.getElementById("alternative").checked) {
        Alternative += 2;
    } else if (document.getElementById("coastal").checked) {
        Country += 2;
    } else if (document.getElementById("oldmoney").checked) {
        Pop += 1;
    }

    if (document.getElementById("country").checked) {
        Country += 2;
    } else if (document.getElementById("pop").checked) {
        Pop += 2;
    } else if (document.getElementById("rap").checked) {
        Rap += 2;
    } else if (document.getElementById("Alternative").checked) {
        Alternative += 2;
    } else if (document.getElementById("r&b").checked) {
        RnB += 2;
    }

    resetResult();

    if (Country > Pop && Country > Rap && Country > Alternative && Country > RnB) {
        document.getElementById("CountryResult").style.display = "block";
    } else if (Rap > Country && Rap > Pop && Rap > Alternative && Rap > RnB) {
        document.getElementById("RapResult").style.display = "block";
    } else if (Alternative > Rap && Alternative > Country && Alternative > Pop && Alternative > RnB) {
        document.getElementById("AlternativeResult").style.display = "block";
    } else if (RnB > Rap && RnB > Country && RnB > Alternative && RnB > Pop) {
        document.getElementById("RnBResult").style.display = "block";
    } else {
        document.getElementById("PopResult").style.display = "block";
    }
}
