var i=0;
function sound()
{
   var sond = new Audio('assets/sound/mouse.mp3');
   sond.play()
}
var audio = new Audio('assets/sound/backgr.mp3');
function windoww(){
   
    audio.play();
    i++;
}
if(i===1)
{
    delete audio;
}


