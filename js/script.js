let msgAlert = "L'età e/o il numero di km inseriti non sono validi.";
let eta = prompt("Buongiorno! Quanti anni");
let km = prompt("Quanti kilometri desideri percorrere?");

/* inizio controlli */
eta = parseInt(eta);
km = parseInt(km);
console.log("Età:" + eta, "km:" + km);

if (isNaN(eta) || isNaN(km)){
    alert(msgAlert);
}
/* fine controlli */



const costKm = 0.21;
let costoTot = km * costKm;
console.log("Costo totale:" + costoTot);

if (eta < 18) {
    costoTot = costoTot * .8
} else if (eta >= 65) {
    costoTot = costoTot * .6
}
console.log("Costo totale scontato:" + costoTot.toFixed(2))

alert( `Il prezzo del biglietto per il costo del tuo viaggio di ${km} km è pari a: ${costoTot.toFixed(2)}€`); 