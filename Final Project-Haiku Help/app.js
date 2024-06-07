// Switch to strict mode to get more useful errors when you make mistakes.
'use strict';

function ShowDog(){
    document.getElementById("DogQ").style.display = "block";
    document.getElementById("CatQ").style.display = "none";     
}
function ShowDogResult(){
    var sentence1= "";
    if (document.getElementById("Dogblah1").checked) {
       sentence1=document.getElementById("Option1").innerHTML;
    } else if (document.getElementById("Dogblah2").checked) {
        sentence1=document.getElementById("Option2").innerHTML;  
    } else if (document.getElementById("Dogblah3").checked) {
        sentence1=document.getElementById("Option3").innerHTML;
    }

    var sentence2= "";
    if (document.getElementById("Dogblah4").checked) {
        sentence2=document.getElementById("Option1A").innerHTML;
    } else if (document.getElementById("Dogblah5").checked) {
        sentence2=document.getElementById("Option2A").innerHTML;   
    } else if (document.getElementById("Dogblah6").checked) {
        sentence2=document.getElementById("Option3A").innerHTML;
    }

    var sentence3= "";
    if (document.getElementById("Dogblah7").checked) {
        sentence3=document.getElementById("Option1B").innerHTML;
    } else if (document.getElementById("Dogblah8").checked) {
        sentence3=document.getElementById("Option2B").innerHTML; 
    } else if (document.getElementById("Dogblah9").checked) {
        sentence3=document.getElementById("Option3B").innerHTML;
    }

    document.getElementById("DogR").style.display = "block";  
   document.getElementById("S1").innerHTML=sentence1;
   document.getElementById("S2").innerHTML=sentence2;
   document.getElementById("S3").innerHTML=sentence3;
   
}
function ShowCat(){
    document.getElementById("CatQ").style.display = "block";   
    document.getElementById("DogQ").style.display = "none";  
}
function ShowCatResult(){
    var sentence1C= "";
    if (document.getElementById("Catblah1").checked) {
       sentence1C=document.getElementById("Option11").innerHTML;
    } else if (document.getElementById("Catblah2").checked) {
        sentence1C=document.getElementById("Option22").innerHTML;  
    } else if (document.getElementById("Catblah3").checked) {
        sentence1C=document.getElementById("Option33").innerHTML;
    }

    var sentence2C= "";
    if (document.getElementById("Catblah4").checked) {
        sentence2C=document.getElementById("Option11A").innerHTML;
    } else if (document.getElementById("Catblah5").checked) {
        sentence2C=document.getElementById("Option22A").innerHTML;   
    } else if (document.getElementById("Catblah6").checked) {
        sentence2C=document.getElementById("Option33A").innerHTML;
    }

    var ssentence3C= "";
    if (document.getElementById("Catblah7").checked) {
        ssentence3C=document.getElementById("Option11B").innerHTML;
    } else if (document.getElementById("Catblah8").checked) {
        ssentence3C=document.getElementById("Option22B").innerHTML; 
    } else if (document.getElementById("Catblah9").checked) {
        ssentence3C=document.getElementById("Option33B").innerHTML;
    }
    document.getElementById("CatR").style.display = "block";  
   document.getElementById("S1C").innerHTML=sentence1C;
   document.getElementById("S2C").innerHTML=sentence2C;
   document.getElementById("S3C").innerHTML=ssentence3C;
}

