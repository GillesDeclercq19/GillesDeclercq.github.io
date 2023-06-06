// in deze oplossing gaan we ervan uit dat localstorage altijd beschikbaar is.
// zie https://caniuse.com/#search=localstorage

const storeSliderValues = () => {
    // lees de waarden vd sliders uit
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;

    // stop ze in een object
    let rgb = {
        red: red,
        green: green,
        blue: blue
    };

    // bewaar dit object in local storage
    let jsonText = JSON.stringify(rgb);
    localStorage.setItem("colorpicker.sliders", jsonText);
};

const restoreSliderValues = () => {
    let jsonText = localStorage.getItem("colorpicker.sliders");
    if (jsonText != null) {
        let rgb = JSON.parse(jsonText);
        document.getElementById("sldRed").value = rgb.red;
        document.getElementById("sldGreen").value = rgb.green;
        document.getElementById("sldBlue").value = rgb.blue;
    }
};

const storeSwatches = () => {
    // bouw een array met kleurinfo objecten
    let rgbColors = [];
    let swatches = document.getElementsByClassName(" swatch"); // let op, enkel de onderste swatches!
    for (let i = 1; i < swatches.length; i++) {
        let rgb = {
            red: swatches[i].getAttribute("data-red"),
            green: swatches[i].getAttribute("data-green"),
            blue: swatches[i].getAttribute("data-blue")
        };

        rgbColors.push(rgb);
    }

    // bewaar array in local storage
    let jsonText = JSON.stringify(rgbColors);
    localStorage.setItem("colorpicker.swatches", jsonText);
};

const restoreSwatches = () => {
    jsonText = localStorage.getItem("colorpicker.swatches");
    if (jsonText != null) {
        let rgbColors = JSON.parse(jsonText);
        for (let i = 0; i < rgbColors.length; i++) {
            // voeg voor elke bewaarde kleur een swatch toe
            let rgb = rgbColors[i];
            addSwatchComponent(rgb.red, rgb.green, rgb.blue);
        }
    }
};
