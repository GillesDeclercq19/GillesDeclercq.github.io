let students = [
    {
        firstName: "John",
        lastName: "Doe",
        address: {
            zipCode: 8500,
            city: "Kortrijk"
        }
    },
    {
        firstName: "VIVES",
        lastName: "Doe",
        address: {
            zipCode: 8500,
            city: "Kortrijk"
        }
    }
];
// omzetten script-object naar een JSON-object
tekst = JSON.stringify(students);

console.log (tekst);
// omzetten JSON-object naar script-object
tekstJS = JSON.parse(tekst);
console.log ("JsonParse " + tekstJS[0].firstName);