const setup = () => {
    let btnTry = document.getElementById("btnTry");

    btnTry.addEventListener("mouseover", mouseHover);
    btnTry.addEventListener("click", onClick);
    btnTry.addEventListener("mouseout", mouseOut);

    document.getElementById("btnWithoutBullets").addEventListener("click", withoutBullets);
    document.getElementById("btnWithBullets").addEventListener("click", withBullets);

    document.getElementById("btnContent").addEventListener("click", changeContent)

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
    let listItems = document.getElementsByTagName("li");
    for (let i = 0; i < listItems.length; i++)
    {
        /* listItems[i].style.listStyleType="none";
        listItems[i].style.backgroundColor="red"; */

        /*listItems[i].className = "listItemsStyleNone colorRed"*/

        listItems[i].classList.remove("colorWhite");
        listItems[i].classList.remove("listItemsStyleDisc")
        listItems[i].classList.add("listItemsStyleNone")
        listItems[i].classList.add("colorRed")
        console.log("output" + listItems[i].className)
    }
}

const withBullets = () => {
    let listItems = document.getElementsByTagName("li");
    for (let i = 0; i < listItems.length; i++)
    {
        listItems[i].classList.add("listItemsStyleDisc")
        listItems[i].classList.add("colorWhite")
        console.log("output" + listItems[i].className)
    }

}

const changeContent = () => {
    document.getElementById("textContent").textContent = "<a href='https://vives.be'>VIVES</a>"
    document.getElementById("textContent").innerHTML = "<a href='https://vives.be'>VIVES</a>"
}
window.addEventListener("load", setup);