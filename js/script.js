let msgAlert = "L'età e/o il numero di km inseriti non sono validi.";
let eta = prompt("Buongiorno! Quanti anni hai?");
let km = prompt("Quanti kilometri desideri percorrere?");


eta = parseInt(eta);
km = parseInt(km);

const costKm = 0.21;
let discount = 1;

let msgAlertPrice = "";

if (isNaN(eta) || isNaN(km)){
    alert(msgAlert);
} else if (eta < 18) {
    discount = .8;
} else if (eta >= 65) {
    discount = 0.6;
}

let costoTot = km * costKm * discount;
alert(`Il prezzo del biglietto per il costo del tuo viaggio di ${km} km è pari a: ${costoTot.toFixed(2)}€`);