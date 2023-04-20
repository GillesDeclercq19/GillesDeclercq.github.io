const setup = () => {
    document.querySelectorAll('p.example').forEach(function(el) {
        el.innerHTML = "Good Job!";
    });
}
window.addEventListener("load", setup);