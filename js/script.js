const eta = prompt("Buongiorno! Qual è la tua età?");
const km = prompt("Quanti kilometri desideri percorrere?");
console.log("Età:" + eta, "km:" + km);

const costKm = 0.21;
let costoTot = km * costKm;
console.log("Costo totale:" + costoTot);

if (eta < 18) {
    costoTot = costoTot * .8
} else if (eta >= 65) {
    costoTot = costoTot * .6
}
console.log("Costo totale scontato:" + costoTot.toFixed(2))

alert( `Il prezzo del biglietto per il costo del tuo viaggio di ${km} km è pari a: ${costoTot.toFixed(2)}€` );