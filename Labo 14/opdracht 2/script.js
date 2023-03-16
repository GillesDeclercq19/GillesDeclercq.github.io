const  setup = () => {
    console.log("dit is een mededeling op de console");
    window.alert("Dit is een mededeling");
    window.confirm("Weet u het zeker?");
    window.prompt("Wat is uw naam", "onbekend");
}
window.addEventListener('load', setup);