var i=0;
function sound()
{
   var sond = new Audio('assets/sound/mouse.mp3');
   sond.volume = 0.015;
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



navtbut = document.getElementById("navtbut");

var navToTop = function () {
  var y = window.scrollY;
  if (y >= 220) {
      navtbut.className = "appear"
  } 
  else {
      navtbut.className = "disappear"
  }
};

window.addEventListener("scroll", navToTop);


///data
const basicAutocomplete = document.querySelector('#basic');
const data = ['Museum', 'Party', 'Restaurant', 'Concert', 'Architecture'];
const dataFilter = (value) => {
  return data.filter((item) => {
    return item.toLowerCase().startsWith(value.toLowerCase());
  });
};

new mdb.Autocomplete(basicAutocomplete, {
  filter: dataFilter
});

const locationAutocomplete = document.querySelector('#location');
const dataL = ['1 adult', '2 adults', '3 adults', '2 adults and 1 child', '2 adults and 2 children'];
const dataFilterL = (value) => {
  return dataL.filter((item) => {
    return item.toLowerCase().startsWith(value.toLowerCase());
  });
};

new mdb.Autocomplete(locationAutocomplete, {
  filter: dataFilterL
});