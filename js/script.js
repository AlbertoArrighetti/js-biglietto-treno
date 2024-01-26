// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.


// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi 
// sul prezzo). Questo richiederà un minimo di ricerca.









// const kmNumber = prompt("Inserire i kilometri da percorrere");
// test
const kmNumber = 70;

// const age = prompt("Inserire l'età del passeggero");
// test
const age = 50;

let totalPrice;
totalPrice = kmNumber * 0.21;

let ticketPrice = totalPrice
let discountPrice;

document.getElementById("Km").innerHTML = `${kmNumber} Km`
document.getElementById("Age").innerHTML = `${age} anni`














if (age <= 17){
    discountPrice = totalPrice - [(totalPrice * 20) / 100]; 
    document.getElementById("Price").innerHTML = `${discountPrice}€`;
} else if (age >= 65){
    discountPrice = totalPrice - [(totalPrice * 40) / 100];
    document.getElementById("Price").innerHTML = `${discountPrice}€`;
} else {
    document.getElementById("Price").innerHTML = `${ticketPrice}€`;
}


























console.log("numero km", kmNumber);
console.log("età", age);
console.log("prezzo totale in base ai km", totalPrice);
console.log("biglietto", ticketPrice);
console.log("sconto applicato", discountPrice);