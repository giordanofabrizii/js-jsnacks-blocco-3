// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
// Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

let array= [];

let somma = 0;
do {
    let userNumber = Number.parseInt(prompt("ciao, scrivi un numero"), 10)
    while (Number.isNaN(userNumber) == true) {
        userNumber = Number.parseInt(prompt("ciao, scrivi un numero"), 10)
    }

    array.push(userNumber);

    somma += array[array.length - 1];

} while (somma < 50)