function sound()
{
   var sond = new Audio('assets/sound/mouse.mp3');
   sond.play()
}

 
window.onload  = windowStart();
  
function windowStart(){
    var audio = new Audio('assets/sound/backgr.mp3');
    audio.play();
}

