const setup = () => {
    let birthDay = new Date(2002, 11,24,15,0,0);
    let toDay = new Date(2022,4,27,9,4,0);

    levensduur = toDay - birthDay;
    console.log(levensduur);

    levensduurInDagen = levensduur / 86400000;
    console.log(levensduurInDagen);
    console.log("Aantal dagen " + Math.ceil((levensduurInDagen)));
}
window.addEventListener("load", setup);