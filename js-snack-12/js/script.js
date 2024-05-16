// Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

//  ! funzione sbagliata

// function confronta(stringaUno, stringaDue) {
//     if (stringaUno.length === stringaDue.length) {
//         console.log(stringaUno, stringaDue);
//     } else if (stringaDue.length > stringaUno.length) {
//         console.log(stringaDue);
//     } else {
//         console.log(stringaUno)
//     }
// }

//  < funzione corretta
function confronta(stringaUno, stringaDue){
    return(stringaUno.length === stringaDue.length);
}

let testoA = "ciao";
let testoB = "sono piu lungo";

if (confronta(testoA, testoB)) {
    console.log(testoA, testoB)
} else if (testoB.length > testoA.length) {
        console.log(testoB);
    } else {
        console.log(testoA)
    }

function controllaCaratteri(stringaUno, stringaDue) {
    if (stringaUno.length === stringaDue.length) { // se sono uguali di lunghezza

        let uguaglianza = true;

        for (let i = 0; i < stringaDue.length; i++) {
            if (stringaDue[i] != stringaUno[i]) {
                uguaglianza = false;
            }
        }

        if (uguaglianza) { // se sono uguali
            console.log("sono uguali in tutto e per tutto");
        } else { // se hanno qualche carattere diverso
            console.log("sono lunghe uguali, ma sono diverse nei caratteri")
        }
    } else {
        console.log("sono di diversa lunghezza");
    }
}

let testoC = "ciao";
let testoD = "ciao";

controllaCaratteri(testoC, testoD);

function controllaCaratteriWhile(stringaUno, stringaDue) {
    if (stringaUno.length === stringaDue.length) { // se sono uguali di lunghezza

        let uguaglianza = true;

        let index = 0;

        while (index < stringaDue.length) {
            if (stringaDue[index] != stringaUno[index]) {
                uguaglianza = false;
            }

            index++
        }

        if (uguaglianza) { // se sono uguali
            console.log("sono uguali in tutto e per tutto");
        } else { // se hanno qualche carattere diverso
            console.log("sono lunghe uguali, ma sono diverse nei caratteri")
        }
    } else {
        console.log("sono di diversa lunghezza");
    }
}

controllaCaratteriWhile(testoC, testoD);