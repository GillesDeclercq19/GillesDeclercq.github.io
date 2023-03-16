let Familienamen = ["Perneel", "Declerq", "Desmet","Kader","Compernolle"];
console.log(Familienamen.length);
console.log(Familienamen[0]);
console.log(Familienamen[2]);
console.log(Familienamen[4]);
VoegNaamToe("jef");

function VoegNaamToe(naam) {
    Familienamen.push(naam)
}
console.log(Familienamen.toString());