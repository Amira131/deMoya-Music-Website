const h4 = document.createElement("h4");
h4.textContent = "Gallery";
document.querySelector("body").appendChild(h4);

let album = document.getElementById("album-cover")

album.addEventListener('click',()=>{
    console.log("clicked")
});


