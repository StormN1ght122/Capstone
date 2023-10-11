var object=document.getElementById("shape");
var animation=setInterval(play, 5);
clearInterval(animation);
var currentPos=60;
var height=50;
object.style.color="white";


//Start Animation
document.getElementById("start").addEventListener("click", animation2);

//Pauses and resets Animation
document.getElementById("reset").addEventListener("click", function(){
  clearInterval(animation)
  
  
  
  height=50;
  object.style.height="50px";
  
  currentPos=60;
  object.style.top="60px";
  object.style.background="yellow";
});

//Re-iterates Animation again
function animation2(){
  clearInterval(animation);
  animation=setInterval(play,5);
}



//Animation 
function play(){   
  object.innerHTML=":)";
  object.style.background="purple";
  currentPos=currentPos+2
  object.style.top=currentPos+"px";
  if(currentPos>200){
    object.innerHTML="";
    object.style.bottom="201px"
    height=height-2;
    object.style.height=height+"px";
    
    
  }
}






