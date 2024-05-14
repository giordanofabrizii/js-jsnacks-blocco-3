let arrayUno = [1,23,52];
let arrayDue = [243,5,12,51,4,73];

let arrayMinore;
let arrayMaggiore;

if (arrayUno.length > arrayDue.length) {
    arrayMaggiore = arrayUno;
    arrayMinore = arrayDue;
} else {
    arrayMaggiore = arrayDue;
    arrayMinore = arrayUno;
}

let delta = arrayMaggiore.length - arrayMinore.length;

for (let i = 0; i < delta; i++) {
    arrayMinore.push(Math.floor(Math.random()*100));
}

console.log(arrayDue);
console.log(arrayUno)