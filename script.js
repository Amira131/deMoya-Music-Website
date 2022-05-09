const h2 = document.createElement("h2");
h2.textContent = "The Girl In The Water";
document.querySelector("body").appendChild(h2);

const img = document.getElementById('img');
function clickAlert() {
    alert(' Just a girl in the water.')
}

img.addEventListener('click, clickAlert')
