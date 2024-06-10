// Switch to strict mode to get more useful errors when you make mistakes.
'use strict';

function resetResult() {
    document.getElementById("DoctorResult").style.display = "none";
    document.getElementById("ChefResult").style.display = "none";
    document.getElementById("ChildCareResult").style.display = "none";
    document.getElementById("AthleteResult").style.display = "none";
}

function seeResult() {
    var Chef = 0;
    var ChildCare = 0;
    var Doctor = 0;
    var Athlete = 0;

    if (document.getElementById("Tall").checked) {
        Athlete += 1;
        
    } else if (document.getElementById("cold").checked) {
        ChildCare += 1;
    } else {
        Chef += 1;
        Doctor += 1;
    }

    if (document.getElementById("Pizza").checked) {
        
        Athlete += 1;
    } else if (document.getElementById("steak").checked) {
       Chef += 1;
    } else {
        ChildCare += 1;
        Doctor += 1;
    }
    
    if (document.getElementById("Yes").checked) {
        Chef += 1;
        
    } else if (document.getElementById("Kinda").checked) {
        Doctor += 1;
        ChildCare += 1;
    } else {
        Athlete += 1;
    }

    if (document.getElementById("Good").checked) {
        ChildCare += 1;
    } else if (document.getElementById("Alright").checked) {
        Athlete += 1;
        Doctor += 1;
    } else {
        Chef += 1;
    }

    
    if (document.getElementById("Cats").checked) {
        Chef += 1;
        
    } else if (document.getElementById("Dogs").checked) {
        ChildCare += 1;
    } else {
        Athlete += 1;
        Doctor += 1;
    }

    resetResult();

    if (ChildCare > Chef && ChildCare > Doctor && ChildCare > Athlete) {
        document.getElementById("ChildCareResult").style.display = "block";
    } else if (Chef > ChildCare && Chef > Doctor && Chef > Athlete) {
        document.getElementById("ChefResult").style.display = "block";
    } else if (Doctor > ChildCare && Doctor > Chef && Doctor > Athlete) {
        document.getElementById("DoctorResult").style.display = "block";
    } else {
        document.getElementById("AthleteResult").style.display = "block";
    }
}
