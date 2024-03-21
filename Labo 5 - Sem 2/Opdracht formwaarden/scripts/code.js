const setup = () => {
//twee variabelen geinitialiseerd met string literals
    let string1 = "hallo";
    let string2 = "hallo";
    console.log(string1 === string2);

//een string literal en het resultaat van een .slice() oproep
    let string3 = "Banana";
    let slice = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    let string4 = slice.slice(0,1);
    console.log(string4);
    console.log(string3 === string4);

//het resultaat van een .slice() oproep en een string concatenatie
    let str1 = "bonjour";
    let str2 = "bon";
    let str3 = "jour";
    let conc = str2.concat(str3);

    console.log(conc);
    console.log(str1 === conc);

}
window.addEventListener("load", setup);