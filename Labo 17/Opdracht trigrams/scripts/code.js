const setup = () => {
    let string = "onoorbaar";


    for (let i=0; i<string.length -2; i++) {
        let x = i + 3
        let slice = string.slice(i,x);
        console.log(slice);
    }

    /*
    const toonTrigrams = () =>{
    let txtTekst = document.getElementById("txtTekst");
    let tekst = txtTekst.value;
    let lstTrigram = document.getElementById("lstTrigrams");
    let trigrams = getTrigrams(tekst);
    let ouput="";
    for (let i=0; i<trigrams.length;i++) {
    output +="<li>"+trigrams[i]+"</li>";
    }

    };

    const getTrigrams = (tekst) => {
    let result =[];
    let trigram;
    for (let i=0; i<tekst.length-3; i++){
    trigram = tekst.slice(i,i+3);
    result.push(trigram);
    }
    return result;
    };
     */


}
window.addEventListener("load", setup);