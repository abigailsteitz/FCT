
'use strict';
var currentSize = 5;
function growchair() {
currentSize +=5;
document.getElementById("chair").style.width= currentSize + "%";
}