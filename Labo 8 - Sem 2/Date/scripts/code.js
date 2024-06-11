const setup = () => {

    let start = new Date();
    //huidige datum
    console.log(start);
    //dag
    console.log(start.getDate());
    //welke dag
    console.log(start.getDay()); // ma -> 1 // zo -> 0 // za -> 6
    //welke maand
    console.log(start.getMonth()); // jan -> 0 //dec -> 11
    //jaar
    console.log(start.getFullYear());

    let d = new Date(2022,4,25,10,33,60);
    console.log(d);
}
window.addEventListener("load", setup);