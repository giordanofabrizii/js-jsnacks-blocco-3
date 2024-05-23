// > Crea un array composto da 15 automobili.
// > Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
// < Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
// < Infine stampa separatamente i 3 array.

const cars = [
    {
        marca : 'Ford',
        modello : 'Puma',
        alimentazione : 'Diesel'
    },
    {
        marca : 'Maserati',
        modello : 'Grecale',
        alimentazione : 'Benzina'
    },
    {
        marca : 'Toyota',
        modello : 'Supra',
        alimentazione : 'Metano'
    },
    {
        marca : 'Tesla',
        modello : 'Model Y',
        alimentazione : 'Elettrico'
    },
    {
        marca : 'Subaru',
        modello : 'Baracca',
        alimentazione : 'Benzina'
    },
    {
        marca : 'Fiat',
        modello : 'Doblo',
        alimentazione : 'Diesel'
    },
    {
        marca : 'Juaguar',
        modello : 'F-Type',
        alimentazione : 'Benzina'
    },
    {
        marca : 'Land Rover',
        modello : 'Range Rover',
        alimentazione : 'Diesel'
    },
    {
        marca : 'BMW',
        modello : 'i8',
        alimentazione : 'Elettrico'
    },
    {
        marca : 'Mercedes',
        modello : 'EQS',
        alimentazione : 'Elettrico'
    },
    {
        marca : 'Fiat',
        modello : 'Punto',
        alimentazione : 'Metano'
    },
    {
        marca : 'Ford',
        modello : 'Fiesta',
        alimentazione : 'Gpl'
    },
    {
        marca : 'Fiat',
        modello : '500x',
        alimentazione : 'Diesel'
    },
    {
        marca : 'Citroen',
        modello : 'C3',
        alimentazione : 'Benzina'
    },
    {
        marca : 'Ferrari',
        modello : 'SF90 Stradale',
        alimentazione : 'Benzina'
    }
];

let dieselCars = cars.filter((car) => {
    if (car.alimentazione == 'Diesel') {
        return true;
    } else {
        return false;
    }
});