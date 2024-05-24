// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.
// Dividi in due array separati le zucchine che misurano meno o più di 8cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

const zucchine = [
    { varieta: 'Nera di Milano', peso: 341, lunghezza: 14 },
    { varieta: 'Romanesca', peso: 287, lunghezza: 19 },
    { varieta: 'Fiorentina', peso: 458, lunghezza: 22 },
    { varieta: 'Tonda', peso: 132, lunghezza: 25 },
    { varieta: 'Lunga fiorentina', peso: 376, lunghezza: 28 },
    { varieta: 'Striata d\'Italia', peso: 231, lunghezza: 11 },
    { varieta: 'Bianca triestina', peso: 314, lunghezza: 17 },
    { varieta: 'Gialla', peso: 459, lunghezza: 12 },
    { varieta: 'Rugosa friulana', peso: 278, lunghezza: 26 },
    { varieta: 'Patisson', peso: 387, lunghezza: 29 }
];

let pesoTotale = 0;
let zucchineGrandi = [];
let zucchineGrandissime = [];

zucchine.forEach(zucchina => {
    pesoTotale += zucchina.peso;

    if (zucchina.lunghezza > 8) {
        zucchineGrandissime.push(zucchina)
    } else {
        zucchineGrandi.push(zucchina);
    }
})

let sommaGrandi = 0;
let sommaGrandissimi = 0;
zucchineGrandi.forEach(zucchina => {
    sommaGrandi += zucchina.peso;
})

zucchineGrandissime.forEach(zucchina => {
    sommaGrandissimi += zucchina.peso;
})

console.log(pesoTotale)
console.log(sommaGrandi)
console.log(sommaGrandissimi)