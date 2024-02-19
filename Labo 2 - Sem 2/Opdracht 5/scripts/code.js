const setup = () => {
    let test = document.getElementById("wijzigButton");
    test.addEventListener("click", code);
}

const code = () => {
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML="Welkom!";
}
window.addEventListener("load", setup);