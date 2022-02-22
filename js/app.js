let music = document.querySelector("music");
// Giving audio for define 
music = new Audio("media/XXXTENTACION A Remedy For A Broken Heart.mp3");
// PLAY
let play = document.getElementById("play");
play.addEventListener("click", function() {
    music.play();
    console.log("Play");
});
// PAUSE
let pause = document.getElementById("pause");
pause.addEventListener("click", function() {
    music.pause();
    console.log("Pused !");
});
// RELOAD
let reload = document.getElementById("reload");
reload.addEventListener("click", function() {
    music.load();
    console.log("Reload !");
    music.play();
});