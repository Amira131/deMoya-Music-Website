const h2 = document.createElement("h2");
h2.textContent = "The Girl In The Water";
document.querySelector("body").appendChild(h2);

var audio = new Audio("How Can You Be Happy.wav");

document.onclick = function() {
  audio.play();
}

var sound = new Audio("How Can You Be Happy.wav");

button.addEventListener('click',()=>{
	sound.currentTime = 0;
	sound.play();
});
