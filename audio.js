var data = {
    title : [
    "Armani White-BILLIE EILISH.",
    "Tatoul Avoyan - Srti banali.",
    "Shakira_-_Waka_Waka",
    "Mamba_-_Otido",
    "best-slice-slash-crash.",
    ],

   

 song: [
    "music/Armani_White_-_Billie-Eilish_Official_Video_(mp3.pm).mp3",
    "music/Tatoul Avoyan (Tatul) - Srti banali.",
    "musyc/Shakira_-_Waka_Waka_Original_(mp3.pm).",
    "music/Mamba_-_Otido_(www.mexedi.am)",
    "music/Slash Inferno.mp3"
],
poster : [
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLMkR-ZYHvsAPMft2UHzC1OOebGEda3MRVJOWQHSwmhA&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyaZiTgEa9yt0gg73sfRjiE9EdrE8n3X0M7IotPkEdvA&s",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAx-aO5Dtb6EFhqqPXVb8tBNUN_S7i7AY8wU4mxJuC6g&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7G3N6yRJiO9wDknMWaQOwhh6xlnHm35New9pQhjNXg&s=10",
"https://cdn.mos.cms.futurecdn.net/8fNgFeVnhfSi3RxE5aHMLc.jpg",

]
}
let song = new Audio()
let currentSong = 0
window.onload = function (){
playSong()
}
function playSong (){
  song.src = data.song[currentSong]
  let songTitle = document.getElementById("songTitle")
  songTitle.textContent = data.title[currentSong]
  let img = document.getElementById("row1")
  img.style.backgroundImage = "url ("+ data.poster[currentSong]+")"
  let main = document.getElementById("main")
  main.style.backgroundImage =  "url ("+ data.poster[currentSong]+")"
  song.play()
}

function playOrPauseSong(){


    let play = document.getElementById("play")


    if (song.paused){

           song.play()
           play.src = "images/pause.png"
    }else{
        song.pause()
        play.src = "images/play-button-arrowhead.png"
    }
} 

song.addEventListener("timeupdate", function () {
    let fill = document.getElementById("fill");
    if (song.duration) {
        let position = (song.currentTime / song.duration) * 100;
        fill.style.width = position + "%";}
    converTime(song.currentTime)
    if (song.ended){
        next()
    }
});

function converTime(seconds){
     let currentTime = document.getElementById("currentTime")
     let min = Math.floor(seconds/60)
     let sec = Math.floor(seconds%60)

     min = (min < 10) ? "0" + min : min
     sec = (sec < 10) ? "0" + sec : sec

     currentTime.textContent = min + ":" + sec

     totalTime (Math.round(songduration))
}

function totalTime(){
let min = Math.floor(seconds/60)
let sec =  Math.floor(seconds%60)

min = (min < 10) ? "0" + min : min
 sec = (sec < 10) ? "0" + sec : sec

 currentTime.textContent += " / " + min + ":" + sec  
}


function next (){
currentSong++
if (currentSong >= data.song.length){
      currentSong = 0
}
play.Song()
play.src = "images/pause.png"
}


 function pre (){
currentSong--
if (currentSong <= 0){
    currentSong = data.song.length-1
}
playSong()
play.src = "images/pause.png"
 }

 function muted (){
     let mute = document.getElementById("mute")
       if(song.muted){
      song.muted = false
      mute.src = "images/volume.png"
       }else{
       song.muted = true 
       mute.src = "images/volume-mute.png"

       }
 }