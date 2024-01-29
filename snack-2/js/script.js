// Scrivi un programma che prende tre numeri in input usando prompt. 
// Calcola la media di questi numeri e visualizza il risultato con almeno due decimali.


// richiesta numeri 
let num1 = Number (prompt("inserisci un numero a tua scelta."));
if (isNaN(num1)){
    alert("Il carattere inserito non è valido.");
}

let num2 = Number (prompt("inserisci un numero a tua scelta."));
if (isNaN(num2)){
    alert("Il carattere inserito non è valido.");
}

let num3 = Number (prompt("inserisci un numero a tua scelta."));
if (isNaN(num3)){
    alert("Il carattere inserito non è valido.");
}


// calcolo media

let average = (num1 + num2 + num3) / 3

document.getElementById("Avarage").innerHTML = 
`La media dei numeri ${num1}, ${num2}, ${num3} è: <br> ${average.toFixed(2)}`




console.log(num1)
console.log(num2)
console.log(num3)

console.log(average)