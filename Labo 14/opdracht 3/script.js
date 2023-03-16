const setup = () => {
    document.getElementById("abc");// geeft op site null
    document.getElementsByClassName("xyz");// geef lege html collection weer
    document.getElementsByTagName("img");//geeft een hele lijst met image terug
}

window.addEventListener("load", setup)