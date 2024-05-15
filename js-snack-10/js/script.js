// Crea due array che hanno un numero di elementi diversi. 
// Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

let arrayUno = [3,5];
let arrayDue = [235.5,6,8];

let delta = arrayUno.length - arrayDue.length;

if (delta > 0) { // caso in cui arrayUno e' piu grande di arrayDue
    while (arrayDue.legnth === arrayUno.length) {
        arrayDue.push(Math.floor(Math.random()*numbers.length + 1));
    }
} else if (delta < 0) { // caso in cui arrayUno e' piu piccolo di arrayDue
    while (arrayDue.legnth === arrayUno.length) {
        arrayUno.push(Math.floor(Math.random()*numbers.length + 1));
    }
}

console.log(arrayDue);
console.log(arrayUno)