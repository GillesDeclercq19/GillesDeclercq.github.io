let personen = [];

// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change",bewerkGeselecteerdePersoon)
};

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {

    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();

    // indien ok, bewaar de ingegeven data.
        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan
        if (noErrors()) {
            console.log("no errors succesful")
            let persoon = {
                voornaam: document.getElementById("txtVoornaam").value,
                familienaam: document.getElementById("txtFamilienaam").value,
                geboortedatum: document.getElementById("txtGeboorteDatum").value,
                email: document.getElementById("txtEmail").value,
                aantalkinderen: document.getElementById("txtAantalKinderen").value
            }
            personen.push(persoon);
            console.log("Klik op de knop bewaar");

            let lstPersonen = document.getElementById("lstPersonen");
            let option = document.createElement("option");
            option.innerHTML= persoon.voornaam + " " + persoon.familienaam;
            lstPersonen.appendChild(option);
        }
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";
    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
};



const bewerkGeselecteerdePersoon = (e) => {
    let index = e.target.selectedIndex;
    let persoon = personen[index];
    document.getElementById("txtVoornaam").value = persoon.voornaam;
    document.getElementById("txtFamilienaam").value = persoon.familienaam;
    document.getElementById("txtGeboorteDatum").value = persoon.geboortedatum;
    document.getElementById("txtEmail").value = persoon.email;
    document.getElementById("txtAantalKinderen").value = persoon.aantalkinderen;
}



window.addEventListener("load", setup);