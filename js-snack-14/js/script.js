// ! Chiedi all'utente un numero di secondi da attendere e fai partire un timer da quel momento a zero secondi, interrompendo il timer

let userNumber = Number.parseInt(prompt("Scrivi un numero"));

if (isNaN(userNumber) || userNumber > 10) {
    userNumber = 5;
}

const timer = setInterval( function() {
    console.log(userNumber)
    userNumber--;
    if (userNumber <= 0) {
        clearInterval(timer);
    }
}, 1000, userNumber);