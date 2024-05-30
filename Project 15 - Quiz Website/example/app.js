// Switch to strict mode to get more useful errors when you make mistakes.
'use strict';

function resetResult() {
    document.getElementById("DoctorResult").style.display = "none";
    document.getElementById("ConstructionResult").style.display = "none";
    document.getElementById("HomelessResult").style.display = "none";
    document.getElementById("BusinessResult").style.display = "none";
    document.getElementById("FootballResult").style.display = "none";
}

function seeResult() {
    var Doctor = 0;
    var Construction = 0;
    var Homeless = 0;
    var Business = 0;
    var Football = 0;

    if (document.getElementById("myself").checked) {
        Business += 1;
        Football += 2;
    } else if (document.getElementById("others").checked) {
        Doctor += 1;
        Construction += 2;
    }

    if (document.getElementById("Yes").checked) {
        Construction += 1;
        Football += 1;
        Homeless += 1;
    } else if (document.getElementById("No").checked) {
        Doctor += 1;
        Business += 1.5;
    }

    if (document.getElementById("yes").checked) {
        Doctor += 1;
        Business += 1;
    } else if (document.getElementById("no").checked) {
        Construction += 2;
        Homeless += 1;
        Football += 1;
    } 

    if (document.getElementById("get my hands dirty").checked) {
        Construction +=1;
    }  else if (document.getElementById("others clean it up").checked) {
        Business += 1;
        Football += 1;
    }

    if (document.getElementById("math").chekced) {
        Business += 1;
        Construction += 2;
    }  else if (document.getElementById("science").checked) {
        Doctor += 2;
    }  else if(document.getElementById("PE").checked) {
        Football += 3.1;
        Homeless += 1;
    }


    resetResult();

    if (Doctor > Business && Doctor > Homeless && Doctor > Construction && Doctor > Football) {
        document.getElementById("DoctorResult").style.display = "block";
    } else if (Construction > Doctor && Construction > Business && Construction > Homeless && Construction > Football) {
        document.getElementById("ConstructionResult").style.display = "block";
    
    } else if (Football > Doctor && Football > Construction && Football > Business && Football > Homeless) {
        document.getElementById("FootballResult").style.display = "block";
    } else if (Business > Doctor && Business > Football && Business > Construction && Business > Homeless) {
        document.getElementById("BusinessResult").style.display = "block";
    } else {
        document.getElementById("HomelessResult").style.display = "block";
    } }
