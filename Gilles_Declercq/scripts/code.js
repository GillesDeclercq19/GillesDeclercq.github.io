const setup = () => {
    document.getElementById("status").addEventListener("change", display);
    document.getElementById("txtSearch").addEventListener("input", countLetter);
}


const display = () => {
    let list = document.getElementById("status");
    let imgDiv = document.getElementById("img");
    let note = document.getElementById("note");
    let selectedValue = list.value;

    imgDiv.classList.remove("with-egg");
    imgDiv.classList.remove("without-egg");
    imgDiv.classList.remove("hidden");

    if (selectedValue === "withEgg") {
        imgDiv.classList.add("with-egg");
        note.innerHTML = "Hierboven een kip met een ei";
    } else {
        imgDiv.classList.add("without-egg");
        note.innerHTML = "Hierboven een kip zonder een ei";
    }
    countLetter();
}
const countLetter = () => {
    let div = document.getElementById("count");
    let inputText = document.getElementById("txtSearch").value.toLowerCase();
    let letter = inputText.trim();
    let sentence = document.getElementById("note").innerText.toLowerCase();
    div.classList.remove("hidden");
    let count = 0;

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === letter) {
            count++;
        }
    }
    document.getElementById("txtCount").innerText = count;
}
window.addEventListener("load", setup);