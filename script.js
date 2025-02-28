var fotos = ["perfilfoto.jpg","cato.jpg"];
var element = document.getElementById('profile-image');
var i = 0;
element.src=fotos[i];
setInterval(() => {
    element.src = fotos[i];
    if (i == (fotos.length-1)){
        i=0;
    }else{i++}
}, 600000);

//Estrelas que somem e aparecem
document.addEventListener("DOMContentLoaded", function () {
    const numStars = 150;
    const body = document.body;

    for (let i = 0; i < numStars; i++) {
        let star = document.createElement("div");
        star.classList.add("stars");
        star.style.top = Math.random() * 100 + "vh";
        star.style.left = Math.random() * 100 + "vw";
        star.style.animationDuration = (Math.random() * 2 + 1) + "s";
        star.style.animationDelay = (Math.random() * 2) + "s";
        body.appendChild(star);
    }
});
