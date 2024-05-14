// definisco una lista di elementi (frutta)
frutta =['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];

// aggiungo un altro elemento nella lista
frutta.push("pesca")

let fruttaDaCercare = "cocomero"
let fruttaPresente = false;

// creo un ciclo for che scorre tutti gli elementi della lista
for (let i = 0; i < frutta.length; i++) {
    if (frutta[i] == fruttaDaCercare) {
        fruttaPresente = true;
    }
}

console.log(fruttaPresente)