let familie = ["Declercq", "Louagie", "Shabouev", "Witdouck", "Pieters"]
const setup = () => {
    console.log(familie.length);
    console.log(familie[0], familie[2], familie[4]);
    voegNaamToe();
    console.log(familie.join());
}

const voegNaamToe = () => {
    let input = prompt("Geef een Familienaam");
    familie.push(input);

}
window.addEventListener("load", setup);