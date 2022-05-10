const h2 = document.createElement("h2");
h2.textContent = "The Girl In The Water";
document.querySelector("body").appendChild(h2);

let songPlayer = document.getElementById("song-player")


var audio = new Audio("How Can You Be Happy.wav");

document.onclick = function() {
  audio.play();
}

var sound = new Audio("How Can You Be Happy.wav");

songPlayer.addEventListener('click',()=>{
	sound.currentTime = 0;
	sound.play();
});

//test
