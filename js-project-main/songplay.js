//sidebar
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  function openNavrock() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main2").style.marginLeft = "250px";
  }
  
  function closeNavrock() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main2").style.marginLeft = "0";
  }

//song player
function play(){
var elem = document.getElementById("pewds_play");
    if (elem.value=="PLAY !"){
        elem.value = "Restart";
        document.getElementById("audio_controls").pause();
document.getElementById("audio_controls").setAttribute('src', './audio/pew die pie.mp3');
document.getElementById("audio_controls").load();
document.getElementById("audio_controls").play();
    }
    else{
        elem.value = "PLAY !";
        document.getElementById("audio_controls").pause();
    }
}
function play2(){
    var elem = document.getElementById("tnt");
    if (elem.value=="PLAY !"){
        elem.value = "Restart";
        document.getElementById("audio_controls").pause();
document.getElementById("audio_controls").setAttribute('src', './audio/tnt.mp3');
document.getElementById("audio_controls").load();
document.getElementById("audio_controls").play();
    }
    else{
        elem.value = "PLAY !";
        document.getElementById("audio_controls").pause();
    }
}
function play3(){
    var elem = document.getElementById("feeling_good");
    if (elem.value=="PLAY !"){
        elem.value = "Restart";
        document.getElementById("audio_controls").pause();
document.getElementById("audio_controls").setAttribute('src', './audio/feeling_good.mp3');
document.getElementById("audio_controls").load();
document.getElementById("audio_controls").play();
    }
    else{
        elem.value = "PLAY !";
        document.getElementById("audio_controls").pause();
    }
}
function play4(){
    var elem = document.getElementById("look_at_me");
    if (elem.value=="PLAY !"){
        elem.value = "Restart";
        document.getElementById("audio_controls").pause();
document.getElementById("audio_controls").setAttribute('src', './audio/look at me.mp3');
document.getElementById("audio_controls").load();
document.getElementById("audio_controls").play();
    }
    else{
        elem.value = "PLAY !";
        document.getElementById("audio_controls").pause();
    }
}
function play5(){
    var elem = document.getElementById("kagbeni");
    if (elem.value=="PLAY !"){
        elem.value = "Restart";
        document.getElementById("audio_controls").pause();
document.getElementById("audio_controls").setAttribute('src', './audio/kagbeni.mp3');
document.getElementById("audio_controls").load();
document.getElementById("audio_controls").play();
    }
    else{
        elem.value = "PLAY !";
        document.getElementById("audio_controls").pause();
    }
}
function play6(){
    var elem = document.getElementById("tuyo");
    if (elem.value=="PLAY !"){
        elem.value = "Restart";
        document.getElementById("audio_controls").pause();
document.getElementById("audio_controls").setAttribute('src', './audio/tuyo.mp3');
document.getElementById("audio_controls").load();
document.getElementById("audio_controls").play();
    }
    else{
        elem.value = "PLAY !";
        document.getElementById("audio_controls").pause();
    }
}
function play7(){
    var elem = document.getElementById("mercury");
    if (elem.value=="PLAY !"){
        elem.value = "Restart";
        document.getElementById("audio_controls").pause();
document.getElementById("audio_controls").setAttribute('src', './audio/mercury.mp3');
document.getElementById("audio_controls").load();
document.getElementById("audio_controls").play();
    }
    else{
        elem.value = "PLAY !";
        document.getElementById("audio_controls").pause();
    }
}
function play8(){
    var elem = document.getElementById("1994");
    if (elem.value=="PLAY !"){
        elem.value = "Restart";
        document.getElementById("audio_controls").pause();
document.getElementById("audio_controls").setAttribute('src', './audio/1994.mp3');
document.getElementById("audio_controls").load();
document.getElementById("audio_controls").play();
    }
    else{
        elem.value = "PLAY !";
        document.getElementById("audio_controls").pause();
    }
}
function play9(){
    var elem = document.getElementById("robbery");
    if (elem.value=="PLAY !"){
        elem.value = "Restart";
        document.getElementById("audio_controls").pause();
document.getElementById("audio_controls").setAttribute('src', './audio/robbery.mp3');
document.getElementById("audio_controls").load();
document.getElementById("audio_controls").play();
    }
    else{
        elem.value = "PLAY !";
        document.getElementById("audio_controls").pause();
    }
}
function bib(){
    var elem = document.getElementById("bib");
    if (elem.value=="PLAY !"){
        elem.value = "Restart";
        document.getElementById("audio_controls").pause();
document.getElementById("audio_controls").setAttribute('src', './audio/rock/backinblack.mp3');
document.getElementById("audio_controls").load();
document.getElementById("audio_controls").play();
    }
    else{
        elem.value = "PLAY !";
        document.getElementById("audio_controls").pause();
    }
}
function bs(){
    var elem = document.getElementById("bs");
    if (elem.value=="PLAY !"){
        elem.value = "Restart";
        document.getElementById("audio_controls").pause();
document.getElementById("audio_controls").setAttribute('src', './audio/rock/blacksummer.mp3');
document.getElementById("audio_controls").load();
document.getElementById("audio_controls").play();
    }
    else{
        elem.value = "PLAY !";
        document.getElementById("audio_controls").pause();
    }
}
function ite(){
    var elem = document.getElementById("ite");
    if (elem.value=="PLAY !"){
        elem.value = "Restart";
        document.getElementById("audio_controls").pause();
document.getElementById("audio_controls").setAttribute('src', './audio/rock/intheend.mp3');
document.getElementById("audio_controls").load();
document.getElementById("audio_controls").play();
    }
    else{
        elem.value = "PLAY !";
        document.getElementById("audio_controls").pause();
    }
}
function bl(){
    var elem = document.getElementById("bl");
    if (elem.value=="PLAY !"){
        elem.value = "Restart";
        document.getElementById("audio_controls").pause();
document.getElementById("audio_controls").setAttribute('src', './audio/pop/blindinglights.mp3');
document.getElementById("audio_controls").load();
document.getElementById("audio_controls").play();
    }
    else{
        elem.value = "PLAY !";
        document.getElementById("audio_controls").pause();
    }
}
function utf(){
    var elem = document.getElementById("utf");
    if (elem.value=="PLAY !"){
        elem.value = "Restart";
        document.getElementById("audio_controls").pause();
document.getElementById("audio_controls").setAttribute('src', './audio/pop/uptownfunk.mp3');
document.getElementById("audio_controls").load();
document.getElementById("audio_controls").play();
    }
    else{
        elem.value = "PLAY !";
        document.getElementById("audio_controls").pause();
    }
}