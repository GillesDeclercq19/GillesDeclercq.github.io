const  setup = () => {
    let hoogte = 6;
    let toevoegen  = '*';
    console.log(toevoegen);
    for (let i = 0; i < hoogte; i++) {
        toevoegen = toevoegen + "*";
        console.log(toevoegen);
    }
}
window.addEventListener('load', setup);

/*const setup = () => {

    tree();  //Function call

};

//const name = (par) => { commando's }   // syntax

const tree = () =>{

    let ster = "*";
    const hoogte = 6
    for(let x=0; x <hoogte; x++)   // hoogte
    {
        console.log (ster)
        ster = ster + "*";   // ster+= "*";
    }


// twee manier

    let chr='';

    for(x=1; x <=hoogte; x++)   // hoogte
    {
        for (y=1; y <= x; y++)  // breedte
        {
            chr+="*";
        }
        console.log(chr);
        chr='';
    }
};

window.addEventListener("load", setup);*/