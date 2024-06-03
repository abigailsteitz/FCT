// Switch to strict mode to get more useful errors when you make mistakes.
'use strict';

function resetResult() {
    document.getElementById("EnglishResult").style.display = "none";
    document.getElementById("ArtResult").style.display = "none";
    document.getElementById("ScienceResult").style.display = "none";
    document.getElementById("MathResult").style.display = "none";
}

function seeResult() {
    var English = 0;
    var Art = 0;
    var Science = 0;
    var Math = 0;

    if (document.getElementById("hands-on").checked) {
        Art += 1;
        Science += 1;
    } else if (document.getElementById("lecture").checked) {
        English += 1;
    } else {
        Math += 1;
    }

    if (document.getElementById("write").checked) {
        English += 1;
    } else if (document.getElementById("draw").checked) {
        Art += 1;
    } else {
        Science += 1;
        Math += 1;
    }

    if (document.getElementById("red").checked) {
        Art += 1;
        Math += 1;
    } else if (document.getElementById("blue").checked) {
        English += 1;
    } else {
        Science += 1;
    }

    if (document.getElementById("dog").checked) {
        English += 1;
        Math += 1;
    } else if (document.getElementById("cat").checked) {
        Art += 1;
    } else {
        Science += 1;
    }

    if (document.getElementById("earlyt").checked) {
        Science += 1;
        Math += 1;
    } else if (document.getElementById("night").checked) {
        English += 1;
    } else {
        Art += 1;
    }
    resetResult();

    if (English > Math && English > Science && English > Art) {
        document.getElementById("EnglishResult").style.display = "block";
    } else if (Art > English && Art > Science && Art > Math) {
        document.getElementById("ArtResult").style.display = "block";
    } else if (Math > English && Math > Science && Math > Art) {
        document.getElementById("MathResult").style.display = "block";
    } else {
        document.getElementById("ScienceResult").style.display = "block";
    }
}
