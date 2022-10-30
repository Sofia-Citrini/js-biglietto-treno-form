const inputName = document.querySelector("[name='fullName']");
const inputKm = document.querySelector("[name='km']");
const inputAge = document.querySelector("[name='age']");
const btnStampa = document.querySelector(".btn-form");


// Button
btnStampa.addEventListener("click", function () {
    console.log(`nome: ${inputName.value}`);
    console.log(`kilometri: ${inputKm.value}`);
    console.log(`età: ${inputAge.value}`);

    // validatore dati
    /*if (isNaN (inputKm)) {
        alert ("Chilometri inseriti non validi");
    }

    if (isNaN (inputAge)) {
        alert ("Età inserita non valida");
    }*/

    // Prezzo biglietto
    const prezzo = (inputKm.value) * .21;

    if (inputAge.value == "adulti") {
        console.log("Prezzo biglietto intero: €" + prezzo.toFixed(2));
    } else if (inputAge.value == "minorenne") {
        let prezzoMinorenni = prezzo - (prezzo * 20 / 100);
        console.log("Prezzo bigliettto ridotto del 20%: €" + prezzoMinorenni.toFixed(2));
        // alert("Sconto del 20%");
    } else if (inputAge.value == "over65") {
        let prezzoAnziani = prezzo * 0.6
        console.log("Prezzo biglietto ridotto del 40%: €" + prezzoAnziani.toFixed(2));
        // alert("Sconto del 40%");
    }
})