const setup = () => {
    let btnTry = document.getElementById("btnTry");

    btnTry.addEventListener("mouseover", mouseHover);
    btnTry.addEventListener("click", onClick);
    btnTry.addEventListener("mouseout", mouseOut);

    document.getElementById("btnWithoutBullets").addEventListener("click", withoutBullets);
    document.getElementById("btnWithBullets").addEventListener("click", withBullets);

    document.getElementById("btnContent").addEventListener("click", changeContent);

}

const mouseHover = () => {
    document.getElementById("event").innerHTML += "Mouse Hovered!<br>";
}

const onClick = () => {
    document.getElementById("event").innerHTML += "Mouse Clicked!<br>";
}

const mouseOut = () => {
    document.getElementById("event").innerHTML += "Mouse Out!<br>";
}

const withoutBullets = () => {
    let i;
    let listItems = document.getElementsByTagName("li");
    for (i = 0; i < listItems.length; i++){
        listItems[i].style.listStyleType="none";
        listItems[i].style.backgroundColor="red";
    }
}

const withBullets = () => {
    let i;
    let listItems = document.getElementsByTagName("li");
    for (i = 0; i < listItems.length; i++) {
        listItems[i].style.listStyleType = "circle";
        listItems[i].style.backgroundColor = "white";
    }
}

const changeContent = () => {
        document.getElementById("textContent").textContent ="<a href='https://www.vives.be'>VIVES</a>";
        document.getElementById("innerHTML").innerHTML ="<a href='https://www.vives.be'>VIVES</a>";

}
// difference between "textContent" and "innerHTML"

window.addEventListener("load", setup);