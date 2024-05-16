let userNumber = Number.parseInt(prompt("scrivi un numero ti prego"));

function inverti(number) {
    let stringNumber = userNumber.toString();

    let newString = "";

    for (let i = stringNumber.length - 1; i >= 0; i--) {
        newString += stringNumber[i];
        
    }
    userNumber = parseInt(newString)
    console.log(userNumber);
}

inverti(userNumber);