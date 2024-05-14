let numbers = [];

// chiedo all'utente un numero
let userNumber = Number.parseInt(prompt("Ciao, inserisci un numero"));
    // verifico che sia compreso tra 1 e 100
if (isNaN(userNumber) || userNumber < 1 || userNumber > 100) {
    userNumber = Math.floor(Math.random()*100 + 1);
}

// creo un ciclo for da 0 al numero dell'utente
for (let i = 0; i < userNumber; i++) {
    numbers.push(Math.floor(Math.random()*100 + 1)); // aggiungo un numero da 1 a 100
}
// chiedo all'utente quanti elementi voglio stampare
let userPrint = Number.parseInt(prompt("Ciao, inserisci un numero"));
 // controllo che sia minore/uguale alla length
if (isNaN(userNumber) || userNumber <= 0 || userNumber > numbers.length) {
    userNumber = Math.floor(Math.random()*numbers.length + 1);
}

console.log(userPrint)
console.log(numbers)

// creo un ciclo for al contrario da length al numero che mi ha detto l'utente
for (let i = 0; i < userPrint; i++){
    console.log(numbers[numbers.length - i - 1]);
}