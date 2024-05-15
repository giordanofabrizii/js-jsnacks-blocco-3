// Crea un array vuoto. Chiedi fino a che l'array non ha 6 numeri all'utente di inserire un numero,
// se è dispari inseriscilo nell'array.

let array = [];

while (array.length != 6) {
    let number = Number.parseInt(prompt("ciao, inserisci un numero"));
    if (number % 2 == 1) {
        array.push(number);
    }
}