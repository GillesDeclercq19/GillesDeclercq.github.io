const setup = () => {
    // selecteer div
    const divElement = document.querySelector("#myDIV");

    // maak nieuw p element
    const paragraaf = document.createElement("p");

    // voeg text toe
    paragraaf.textContent = "Dit is een test.";

    // append
    divElement.appendChild(paragraaf);
}
window.addEventListener("load", setup);