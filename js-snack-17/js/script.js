const persone = [
    {
        nome : 'Davide',
        cognome :'Alesci',
        eta : 47,
    },
    {
        nome : 'Matteo',
        cognome :'Neri',
        eta : 6,
    },
    {
        nome : 'Mirko',
        cognome :'Valle',
        eta : 7,
    },
    {
        nome : 'Mattia',
        cognome :'Genco',
        eta : 23,
    },
    {
        nome : 'Adelmo',
        cognome :'Storlini',
        eta : 17,
    },
    {
        nome : 'Elisabetta',
        cognome :'Mirti',
        eta : 76,
    },
    {
        nome : 'Alessandro',
        cognome :'Sarra',
        eta : 12,
    },
    {
        nome : 'Cristian',
        cognome :'Nechifior',
        eta : 90,
    },
    {
        nome : 'Youness',
        cognome :'Lijassi',
        eta : 45,
    },
    {
        nome : 'Riccardo',
        cognome :'Petricca',
        eta : 2,
    }
];

// Crea un array di oggetti che rappresentano delle persone, 10.
// Ogni persona ha un nome, un cognome e un'età.

// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.


let patente = [];

persone.forEach((persona) => {
    let abilita = '';
    if (persona.eta >= 18 && persona.eta <= 80) {
        abilita = 'puo'
    } else {
        abilita = 'non puo';
    }
    let stringa = `${persona.nome} ${persona.cognome} ha ${persona.eta} quindi ${abilita} guidare`;

    console.log(stringa)
});