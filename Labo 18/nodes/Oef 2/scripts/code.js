const setup = () => {
    let liElements = document.querySelectorAll('li');
    for (let i = 0; i < liElements.length; i++) {
        liElements[i].classList.add('listitem');
        //kan ook via className en setAttribute
        //liElements[i].setAttribute("class","listitem");
    }

    let imgElement = document.createElement('img');
    imgElement.setAttribute("src","download.jpg");
    document.querySelector("body").appendChild(imgElement);
}
window.addEventListener("load", setup);