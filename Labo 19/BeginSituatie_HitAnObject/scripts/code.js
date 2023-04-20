

let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};


const setup = () => {

    let btn = document.getElementById("btn");
    btn.addEventListener("click", moveSprite );
    btn.addEventListener("click", changeImg);

    window.addEventListener("resize", updateSize);

    updateSize();

   /* let speelveld = document.getElementById("target");
    speelveld.addEventListener("click", show)*/

    let speelveld=document.getElementById("target"); //"test zal er voor zorgen dat enkel op de smiley klikken werkt//
    speelveld.addEventListener("click", moveSprite);


    let image = document.getElementById("target");
    image.addEventListener("click", changeImg);

    let image2 = document.getElementById("target");
    image2.addEventListener("click", actionsAfterClick);

    let scorepoints = document.getElementById("target");
    scorepoints.addEventListener("click", score);

    let loseGame = document.getElementById("target");
    loseGame.addEventListener("click", lose);

};

const updateSize = () => {
    let speelveld=document.getElementById("playField");
    speelveld.style.width=window.innerWidth+"px";
    speelveld.style.height=window.innerHeight+"px";
}

const moveSprite = () => {


    let sprite=document.getElementsByClassName("bom")[0];
    let speelveld=document.getElementById("playField");
    let maxLeft=speelveld.clientWidth - sprite.offsetWidth;
    let maxHeight=speelveld.clientHeight - sprite.offsetHeight;

    let left=Math.floor(Math.random()*maxLeft);
    let top=Math.floor(Math.random()*maxHeight);
    sprite.style.left=left+"px";
    sprite.style.top=top+"px";
}

const changeImg = () => {
    let image = document.getElementById("target");
    if(image.src.match("images/0.png")) {
        image.src = global.IMAGE_PATH_PREFIX +  Math.floor( Math.random() * global.IMAGE_COUNT)  + global.IMAGE_PATH_SUFFIX;
    }
    else if(image.src.match("images/1.png")) {
        image.src = global.IMAGE_PATH_PREFIX +  Math.floor( Math.random() * global.IMAGE_COUNT)  + global.IMAGE_PATH_SUFFIX;
    }
    else if(image.src.match("images/2.png")) {
        image.src = global.IMAGE_PATH_PREFIX +  Math.floor( Math.random() * global.IMAGE_COUNT)  + global.IMAGE_PATH_SUFFIX;
    }
    else if(image.src.match("images/3.png")) {
        image.src = global.IMAGE_PATH_PREFIX +  Math.floor( Math.random() * global.IMAGE_COUNT)  + global.IMAGE_PATH_SUFFIX;
    }
    else if(image.src.match("images/4.png")) {
        image.src = global.IMAGE_PATH_PREFIX +  Math.floor( Math.random() * global.IMAGE_COUNT)  + global.IMAGE_PATH_SUFFIX;
    }
}

const actionsAfterClick = () => {
    let image = document.getElementById("target");
    if (image.getAttribute("src") === "images/0.png") {
        setTimeout(changeImg, 5000);
    }
}

const score = () => {
    let score = 0
    ++score;
    document.getElementById("score").innerHTML = score;

}

const lose = () => {
    let popUp = document.getElementById("target")
    if (popUp.getAttribute("src") === "images/0.png") {
        alert("Game over")
    }
}
    /*const message = () => {
        console.log("tekst");

    }*/


    /*const show = () => {
        alert("GAME OVER");
    }*/



window.addEventListener("load", setup);



