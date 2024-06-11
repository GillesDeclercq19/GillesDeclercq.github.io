const setup = () => {
    let change = document.querySelectorAll("p");
    change.forEach(function(paragraph) {
        // Change the text of the paragraph
        paragraph.textContent = "Good Job!";
    });
}
window.addEventListener("load", setup);