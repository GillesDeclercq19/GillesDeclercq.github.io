const setup = () => {
    let string = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    index = string.indexOf("de");
    voor = string.slice(0,index);
    na = string.slice(index + "de".length,string.length);
    console.log(index);
    console.log(voor);
    console.log(na);

    result = voor + "het" + na;
    console.log(result);

    /*
   const vervangAlles = (bronTekst, oud, nieuw) => {
    let result=bronTekst;
    let idx=result.indexOf(oud);
    while (idx!=-1) {
        // Neem bv. "Gisteren zat de jongen op de stoep" (=tekst parameter)
        // waarin we "de" (oud parameter) willen vervangen door "het" (=nieuw)
        // Dan bevat idx nu de waarde 13 want "de" komt voor op positie 13

        // bereken het stuk VOOR de gevonden tekst, maw de tekst van
        // positie 0 tot 13 (niet 'tot en met'!), nml
        // "Gisteren zat "
        let voor=result.slice(0, idx);

        // bereken het stuk NA de gevonden tekst, maw de tekst van
        // positie 15 (nml 13+2 omdat "de" twee karakters lang is)
        // tot aan het einde van de tekst, nml
        // " jongen op de stoep"
        let na=result.slice(idx+oud.length, result.length);

        // we vervangen de gevonden tekst door de stukken
        // aan elkaar te plakken met de nieuwe tekst ertussen,
        // dus we krijgen "Gisteren zat "+"het"+" jongen op de stoep"
        result=voor+nieuw+na;

        // de nieuwe tekst staat nu op positie idx in result,
        // we willen verder zoeken vanaf NET NA de nieuwe tekst
        // dus moeten we diens lengte bij idx tellen en vanaf
        // die positie verder zoeken
        // Dus "het" staat nu op positie 13 en we willen verder zoeken
        // vanaf positie 16 (nml 13+3 omdat "het" drie karakters lang is)
        idx=result.indexOf(oud, idx+nieuw.length);
    }
    return result;
};


// Merk op dat we geen window load event moeten afwachten,
// we doen immers niks met de DOM-tree.
let inputTekst="Gisteren zat de jongen op de stoep en at de helft van de appel";
//let inputTekst="de man riep de";

let outputTekst = vervangAlles(inputTekst, "de", "het");
console.log(outputTekst);
     */


}
window.addEventListener("load", setup);