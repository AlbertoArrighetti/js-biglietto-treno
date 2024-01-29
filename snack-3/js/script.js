//Scrivi un programma che simula il gioco di "Carta, forbice, sasso". 

// Chiedi all'utente di fare una scelta e confrontala con una scelta casuale del computer. 
// Determina il vincitore o se c'è un pareggio 





let userChoice = prompt("Scegli cosa giocare: sasso, carta o forbice?")
userChoice = userChoice.toLowerCase();




const computerChoice = Math.floor( Math.random() * 3 + 1);
// 1 sasso
// 2 carta
// 3 forbici

// scelta carta
if (userChoice == "sasso"){
    userChoice = 1
}
if (userChoice == "carta"){
    userChoice = 2
}
if (userChoice == "forbice"){
    userChoice = 3
}

if (userChoice === computerChoice){
    document.getElementById("Result").innerHTML = `Pareggio`;
}else{
    // sasso
    if (userChoice == 1){
        if(computerChoice == 2){
            // sasso vs carta
            document.getElementById("Result").innerHTML = `Sconfitta`;
        }else{
            // sasso vs forbici
            document.getElementById("Result").innerHTML = `Vitttoria`;
        }

    // carta
    }else if (userChoice == 2){
        if(computerChoice == 3){
            // carta vs forbice
            document.getElementById("Result").innerHTML = `Sconfitta`;
        }else{
            // carta vs sasso
            document.getElementById("Result").innerHTML = `Vitttoria`;
        }

        // forbice
    }else{
        if(computerChoice == 1){
            // forbice vs sasso
            document.getElementById("Result").innerHTML = `Sconfitta`;
        }else{
            // forbice vs carta 
            document.getElementById("Result").innerHTML = `Vitttoria`;
        }
    }
}



console.log(userChoice);
console.log(computerChoice);