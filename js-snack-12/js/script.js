// Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

function confronta(stringaUno, stringaDue) {
    if (stringaUno.length === stringaDue.length) {
        console.log(stringaUno, stringaDue);
    } else if (stringaDue.length > stringaUno.length) {
        console.log(stringaDue);
    } else {
        console.log(stringaUno)
    }
}

let testoA = "ciao";
let testoB = "sono piu lungo";

confronta(testoA, testoB);