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

let patente = [];

persone.forEach((persona) => {
    const abilita = persona.eta >= 18 ? 'può' : 'non può';
    let stringa = `${persona.nome} ${persona.cognome} ha ${persona.eta} anni quindi ${abilita} guidare`;

    console.log(stringa)
});