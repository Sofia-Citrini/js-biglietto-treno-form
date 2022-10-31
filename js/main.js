// input
const inputName = document.querySelector("[name='fullName']");
const inputKm = document.querySelector("[name='km']");
const inputAge = document.querySelector("[name='age']");
const btnStampa = document.querySelector(".btn-stampa");

// section ticket
const ticket = document.getElementById("ticket");
const name = document.getElementById("name");
const typeTicket = document.getElementById("type-ticket");
const wagon = document.getElementById("railway-carriage");
const codeCp = document.getElementById("code");
const priceTicket = document.getElementById("price-ticket");


// Button:click stampa biglietto
btnStampa.addEventListener("click", function () {
    console.log(`nome: ${inputName.value}`);
    console.log(`kilometri: ${inputKm.value}`);
    console.log(`età: ${inputAge.value}`);

    ticket.classList.toggle ("d-none")

    name.innerHTML = inputName.value;
    
    if (inputAge.value == "adulti"){
        typeTicket.innerHTML = `Biglietto Intero`;
    } else if (inputAge.value == "minorenne"){
        typeTicket.innerHTML = `Biglietto Ridotto`;
    } else if(inputAge.value == "over65"){
        typeTicket.innerHTML = `Biglietto Ridotto`;
    }

    let wagonNum = Math.ceil(Math.random() * 5);
    wagon.innerHTML = wagonNum;

    codeCp.innerHTML = Math.floor(Math.random() * 100000);

    // Prezzo biglietto
    const prezzo = (inputKm.value) * .21;

    if (inputAge.value === "adulti") {
        console.log("Prezzo biglietto intero:", prezzo.toFixed(2));
        priceTicket.innerHTML = `${prezzo.toFixed(2)} €`;
    } else if (inputAge.value === "minorenne") {
        let prezzoMinorenni = prezzo - (prezzo * 20 / 100);
        console.log("Prezzo biglietto ridotto del 20%:", prezzoMinorenni.toFixed(2));
        priceTicket.innerHTML = `${prezzoMinorenni.toFixed(2)} €`;
    } else if (inputAge.value === "over65") {
        let prezzoAnziani = prezzo * 0.6;
        console.log("Prezzo biglietto ridotto del 40%:", prezzoAnziani.toFixed(2));
        priceTicket.innerHTML = `${prezzoAnziani.toFixed(2)} €`
    }
})


