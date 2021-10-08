let msgAlert = "L'età e/o il numero di km inseriti non sono validi.";
let eta = prompt("Buongiorno! Quanti anni hai?");
let km = prompt("Quanti kilometri desideri percorrere?");


eta = parseInt(eta);
km = parseInt(km);

const costKm = 0.21;
let costoTot = km * costKm;


let msgAlertPrice = `Il prezzo del biglietto per il costo del tuo viaggio di ${km} km è pari a: ${costoTot.toFixed(2)}€`;

if (isNaN(eta) || isNaN(km)){
    alert(msgAlert);
} else if (eta < 18) {
    costoTot = costoTot * .8;
    alert(msgAlertPrice);
} else if (eta >= 65) {
    costoTot = costoTot * .6
    alert(msgAlertPrice);
} else {
    alert(msgAlertPrice);
}