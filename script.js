function openGift(){

document.querySelector(".intro").style.display="none";
document.getElementById("main").style.display="block";

/* blur background */

document.body.classList.add("blur-bg");

/* MUSIC START */

document.getElementById("music").play();

/* confetti */

confetti({
particleCount:150,
spread:120,
origin:{ y:0.6 }
});

}

function openVideo(){

document.getElementById("main").style.display="none";
document.getElementById("videoPage").style.display="block";

}

/* VIDEO END EVENT */

window.onload = function(){

const video = document.getElementById("memoryVideo");

if(video){

video.onended = function(){

document.getElementById("videoPage").style.display="none";
document.getElementById("endPage").style.display="block";

confetti({
particleCount:600,
spread:200
});

};

}

};
