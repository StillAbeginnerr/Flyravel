function sound()
{
   var sond = new Audio('assets/sound/mouse.mp3');
   sond.play()
}
var i=0;
var audio = new Audio('assets/sound/backgr.mp3');

function windoww(){
    if(i==0)
    {
        audio.play();
        i++;
      
    }else{
        delete audio;
   
    }

}



