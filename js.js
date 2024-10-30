const trickButton = document.querySelector("#trick");
const treatButton = document.querySelector("#treat");

const body = document.querySelector("body");
const allButton = document.querySelectorAll("button");
const allDiv = document.querySelectorAll("div");

const exitButton = document.querySelector("#exit");
const popUpDiv = document.querySelector(".pop-up-image");
const popUpImage = document.querySelector("#image");

treatButton.addEventListener("click", e => popUp());
trickButton.addEventListener("click", e => trick());
exitButton.addEventListener("click", e => exit());

function trick(){
    if((Math.floor(Math.random() * 2)) === 0){
        changeColor();
    }
    else
    {
        changeFont();
    }
}

function changeColor(){
    const color = ["blue", "red", "yellow", "violet", "white", "orange", "aqua"]

    allButton.forEach(but => but.style.color = color[Math.floor(Math.random() * color.length)]);
    allDiv.forEach(but => but.style.color = color[Math.floor(Math.random() * color.length)]);
}

function changeFont(){
    const fonts = ["Georgia", "Times New Roman", "Times", "serif"];

    body.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
    console.log(fonts.length)
}

function exit(){
    popUpDiv.style.display = "none";
}

function popUp(){
    var imgs = ["pictures/ghost.jpg",
                "pictures/skele.jpg",
                "pictures/zombe.jpg"]

    popUpImage.src = imgs[Math.floor(Math.random() * imgs.length)];
    popUpDiv.style.display = "flex";
}