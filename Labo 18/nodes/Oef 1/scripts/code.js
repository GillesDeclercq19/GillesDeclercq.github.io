const setup = () => {
    // selecteer p
    let par = document.querySelectorAll("p")[0];
    y = par.childNodes[0];
    par.removeChild(y);
    let textNode = document.createTextNode("Good job");
    par.appendChild(textNode)
}
window.addEventListener("load", setup);