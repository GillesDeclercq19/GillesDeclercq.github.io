const setup = () => {
    let resultConfirm = confirm("Dit is een bevestigingsvenster. Klik op OK of Annuleren.");
    console.log("Returnwaarde van confirm:", resultConfirm);

    let resultPrompt = prompt("Dit is een promptvenster. Voer iets in:");
    console.log("Returnwaarde van prompt (ingevuld):", resultPrompt);

    if (resultPrompt === null) {
        console.log("Returnwaarde van prompt (geannuleerd):", resultPrompt);
    }

}
window.addEventListener("load", setup);