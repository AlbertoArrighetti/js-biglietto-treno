// richiesta km
let kmNumber = prompt("Inserire i kilometri da percorrere");
if (isNaN(kmNumber)){
    prompt("Il dato inserito non è un numero, inserire un numero valido");
}


// età
let age = prompt("Inserire l'età del passeggero");
if (isNaN(age)){
    prompt("Non è un numero, inerire un età valida");
}else if (age < 0){
    prompt ("Età non valida, inseriscine una valida per continuare.");  
}else if (age > 110){
    prompt ("Età non valida, inseriscine una valida per continuare.");  
}


// calcolo prezzi
let totalPrice;
totalPrice = kmNumber * 0.21;

let ticketPrice = totalPrice;

let discountPrice = totalPrice;


document.getElementById("Km").innerHTML = `${kmNumber} Km`;
document.getElementById("Age").innerHTML = `${age} anni`;



// sconto

if (age <= 17){

    discountPrice = totalPrice - [(totalPrice * 20) / 100];
    document.getElementById("Price").innerHTML = `${discountPrice.toFixed(2)}€`;

} else if (age >= 65){

    discountPrice = totalPrice - [(totalPrice * 40) / 100];
    document.getElementById("Price").innerHTML = `${discountPrice.toFixed(2)}€`;

} else {

    document.getElementById("Price").innerHTML = `${ticketPrice.toFixed(2)}€`;

}


console.log("numero km", kmNumber);
console.log("età", age);
console.log("prezzo totale in base ai km", totalPrice);
console.log("biglietto", ticketPrice);
console.log("sconto applicato", discountPrice);