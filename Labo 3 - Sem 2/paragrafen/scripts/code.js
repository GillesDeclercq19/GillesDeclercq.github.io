const setup = () => {
    paragrafen = document.getElementsByTagName("p")
    for(let i = 0; i < paragrafen.length; i++){
        if(paragrafen[i].classList.contains("belangrijk")){
            paragrafen[i].classList.add("opvallend")
        }
    }
}
window.addEventListener("load", setup);