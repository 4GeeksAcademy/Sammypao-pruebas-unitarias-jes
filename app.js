// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))


// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// 2. De Dólar a Yen
//convierto dólares a euros - dividiendo y luego euros a yenes - multiplicando
const fromDollarToYen = function(valueInDollar) {
    let valueInEuro = valueInDollar / 1.07; // convertir a euro
    let valueInYen = valueInEuro * 156.5;   // de Euro a Yen
    return valueInYen;
}

// 3. De Yen a Libra 
// parecido a la aterior
const fromYenToPound = function(valueInYen) {
    let valueInEuro = valueInYen / 156.5; 
    let valueInPound = valueInEuro * 0.87; // de Euro a Libra
    return valueInPound;
}

// 3. Mi registro personal
console.log("10 dólares deberían ser " + fromDollarToYen(10) + " yenes");

console.log("1000 yenes deberían ser " + fromYenToPound(1000) + " libras");


// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };