//text change(s) + title change + carousel slide change 
var change=document.getElementById("text1");
var change2=document.getElementById("text2");
var abtE=document.getElementById("title");
var count=1;
change.style.size="14px";

//title
document.getElementById("title").addEventListener("click",function(){
  if(count==1){
    document.getElementById("title").style.fontFamily = "serif";
    abtE.innerHTML="About Elias*";
    abtE.style.color="rgb(87,87,87)";
    count=2
  }else if(count==2){
  document.getElementById("title").style.fontFamily = "fantasy";
  abtE.innerHTML="About Storm*";
  abtE.style.color="rgb(55,55,99)";  
  count=3;
  } else if(count==3){
  document.getElementById("title").style.fontFamily = "monospace";  
  abtE.innerHTML="About What now*";
  abtE.style.color="red";
  count=4;
  } 
  else if(count==4){
  document.getElementById("title").style.fontFamily = "Times New Roman, Arial,sans-serif";  
  abtE.innerHTML="About how to stop clicking this *";
  abtE.style.color="white";  
  count=5;
  }
  else if(count==5){
  document.getElementById("title").style.fontFamily = "Verdana, Times, helvetica";  
  abtE.innerHTML="Now.*";
  abtE.style.color="Green";
  count=6;
  }
  else if(count==6){
  document.getElementById("title").style.fontFamily = "cursive";  
  abtE.innerHTML="UUnl0ck3dSecret";
  abtE.style.color="#decaB0";
  }

});

//text change
change.onmouseover = function(){
document.getElementById("text1").style.fontFamily = "Impact,Fantasy";
change.style.color="red";
document.getElementById("text1").style.fontSize = "x-large";
};

change.onmouseout = function(){
document.getElementById("text1").style.fontFamily = "bold";
change.style.color="black";
document.getElementById("text1").style.fontSize = "large"; 
};

//text change2
change2.onmouseover = function(){
change2.style.background="rgb(220,220,220)";
change2.style.color="darkgreen";
document.getElementById("text2").style.fontSize = "x-large";
};

change2.onmouseout = function(){
change2.style.background= "#decaB0";
change2.style.color="black";
document.getElementById("text2").style.fontSize = "large";
  
};
//animation1 size change
var change3=document.getElementById("text3");

var c=5
function running(){
  c=c+.1;
  if(c<30){
  change3.style.fontSize=c+"px";
  change3.style.size=c+"px";
  }else if(c>50){
  change3.style.fontSize=c-"px";
  change3.style.size=c-"px";
  }  
};

var animation=setInterval(running,5);


//animation2 rgb change
var ol=document.getElementById("ol1");

var r=0
var g=100
var b=170;
function opening(){
 
 r=r+.5;
 g=g+.5;
 b=b+.5;
 if(r>255){
   r=0;
 }
 if(g>255){
   g=0;
 }
 if(b>255){
   b=0;
 } 
 ol.style.background="rgb("+r+","+g+","+b+")"; 
}
var animation2=setInterval(opening,5);