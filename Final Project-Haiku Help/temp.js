function ShowCat(){
    var sentence1C= "";
    if (document.getElementById("Catblah1").checked) {
       sentence1C=document.getElementById("Option1").innerHTML;
    } else if (document.getElementById("Catblah2").checked) {
        sentence1C=document.getElementById("Option2").innerHTML;  
    } else if (document.getElementById("Catblah3").checked) {
        sentence1C=document.getElementById("Option3").innerHTML;
    }

    var sentence2C= "";
    if (document.getElementById("Catblah4").checked) {
        sentence2C=document.getElementById("Option1").innerHTML;
    } else if (document.getElementById("Catblah5").checked) {
        sentence2C=document.getElementById("Option2").innerHTML;   
    } else if (document.getElementById("Catblah6").checked) {
        sentence2C=document.getElementById("Option3").innerHTML;
    }

    var ssentence3C= "";
    if (document.getElementById("Catblah7").checked) {
        ssentence3C=document.getElementById("Option1").innerHTML;
    } else if (document.getElementById("Catblah8").checked) {
        ssentence3C=document.getElementById("Option2").innerHTML; 
    } else if (document.getElementById("Catblah9").checked) {
        ssentence3C=document.getElementById("Option3").innerHTML;
    }

   document.getElementById("S1C").innerHTML=sentence1C;
   document.getElementById("S2C").innerHTML=sentence2C;
   document.getElementById("S3C").innerHTML=ssentence3C;
}