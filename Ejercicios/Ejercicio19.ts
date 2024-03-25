/**
 * START: Sigue las instrucciones a continuación.
 */

// El tipo `Currency` no funciona para el tipo de valor en la variable `narniaCurrency`.
// Cambia el tipo `Currency` a un tipo de unión que funcione para ambas variables.
//
// Esto debería corregir el error de tipo en la línea 15.

type Currency = string | boolean; // Se cambia el tipo `Currency` a un tipo de unión que incluye `string` y `boolean`

let indianCurrency: Currency = "Indian rupee";
let narniaCurrency: Currency = false; // Ahora `narniaCurrency` puede ser de tipo `string` o `boolean`

// Cambia el tipo para el parámetro `data` de la función para que pueda aceptar
// los diferentes tipos de datos que se pasan cuando se llama a la función.
//
// Esto debería corregir el error de tipo en las líneas 28 y 30.

function outputCountryData(country: string, data: string | number) { // Se cambia el tipo de `data` a una unión de `string` y `number`
    console.log(`The data for ${country} is: ${data}`);
}

outputCountryData("Italy", 60_317_116);
outputCountryData("Nigeria", "Naira"); // Se pasa una cadena como argumento
outputCountryData("United States of America", "English"); // Se pasa una cadena como argumento
outputCountryData("India", 1_352_642_280);

// ----

export {};

/**
 * Explicación:

Se define el tipo Currency como una unión de string y boolean para que pueda contener tanto el nombre de una moneda como un valor booleano.
Se actualizan las variables indianCurrency y narniaCurrency para que utilicen el tipo de unión Currency, lo que permite asignarles tanto cadenas 
como booleanos.
En la función outputCountryData, se cambia el tipo del parámetro data a una unión de string y number, lo que permite aceptar tanto números como 
cadenas como argumentos cuando se llama a la función. Esto corrige los errores de tipo en las líneas 28 y 30.
 */