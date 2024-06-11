const setup = () => {
    let paragraafNode = document.getElementById("abc");
    console.log(paragraafNode);
    console.log(paragraafNode.nodeName, paragraafNode.nodeType);
}
window.addEventListener("load", setup);