// Crea un programma che chiede all'utente una temperatura in gradi Celsius e la converte in Fahrenheit,
// tramite una ricerca su internet potrete trovare la formula corretta per effettuare la conversione
// Visualizza la temperatura convertita.


let celsius = prompt ("inserisci i gradi Celsius da convertire in Fahrenheit.")




if (isNaN(celsius)){
    alert("Il dato inserito non è valido.");
}

let Fahrenheit =  (celsius * 9 / 5) + 32;

document.getElementById("Degrees").innerHTML = `${celsius}°C are equivalent to ${Fahrenheit}°F`



console.log("Gradi Celsius", celsius);
console.log("Gradi Fahrenheit", Fahrenheit);