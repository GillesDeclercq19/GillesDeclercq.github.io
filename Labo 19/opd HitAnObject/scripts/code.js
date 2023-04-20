const global = {
    // aantal figuren
    IMAGE_COUNT: 5,
    // grootte van de figuur
    IMAGE_SIZE: 48,
    // map van de figuren
    IMAGE_PATH_PREFIX: "images/",
    // extensie van de figuren
    IMAGE_PATH_SUFFIX: ".png",
    // aantal milliseconden voor een nieuwe afbeelding verschijnt
    MOVE_DELAY: 3000,
    // aantal hits
    score: 0,
    // id van de timeout timer, zodat we die kunnen annuleren
    timeoutId: 0
}

const setup = () => {
    window.addEventListener("resize", updateSize);


    document.getElementById("btnStart").addEventListener("click", start)
}

const start = (event) => {
    event.target.remove();

    let image = document.getElementById("target");

    image.style.display = "unset";
    document.querySelector("p").style.display = "unset";

    timerId = setInterval(randomizeImage, 1000);

    image.addEventListener("click", actionsAfterClick);
}

const updateSize = () => {
    // telkens het window van grootte verandert,
    // wordt deze method opgeroepen
    //
    // Merk op dat de <div> voor layout redenen "leeg" is,
    // omdat het enige kind absoluut gepositioneerd is. Als
    // we niets speciaals doen zal het dus 0px hoog zijn.
    // Daarom stellen we hier programmatorisch de breedte
    // en hoogte in, zodat het altijd alle ruimte inneemt.
    let speelveld = document.getElementById("playField");
    speelveld.style.width = window.innerWidth + "px";
    speelveld.style.height = window.innerHeight + "px";
}

const actionsAfterClick = (event) => {
    if(!isImageBomb(event)){
        changePosition();
        randomizeImage();
        hit();
    } else {
        alert("Game Over \nScore: "+getCurrentScore());
        location.reload();
    }
}

const isImageBomb = (event) => {
  const imgNum = parseInt(event.target.getAttribute("src")[7]);
  return imgNum === 0;
}

const changePosition = () => {
    let image = document.getElementById("target")
    let speelveld = document.getElementById("playField");
    let maxLeft = speelveld.clientWidth - image.offsetWidth;
    let maxHeight = speelveld.clientHeight - image.offsetHeight;

    // verplaats de image
    let left = Math.floor(Math.random() * maxLeft);
    let top = Math.floor(Math.random() * maxHeight);
    image.style.left = left + "px";
    image.style.top = top + "px";
}

const randomizeImage = () => {
    document.getElementById("target").setAttribute("src", global.IMAGE_PATH_PREFIX + getRandomImageNumber() + global.IMAGE_PATH_SUFFIX);
}

const getRandomImageNumber = () => {
    return (Math.floor(Math.random() * global.IMAGE_COUNT));
}

const hit = () => {
    let span = document.getElementById("score");
    let currentScore =  getCurrentScore();
    span.innerHTML = currentScore+ 1;
}

const getCurrentScore = () => {
    let span = document.getElementById("score");
    return parseInt(span.innerHTML);
}

window.addEventListener("load", setup);


