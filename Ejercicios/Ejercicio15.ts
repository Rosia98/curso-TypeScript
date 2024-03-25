/**
 * START: Sigue las instrucciones a continuación.
 */

const populations = [
    1_412_600_000,
    60_317_116,
    69_950_850,
    10_678_632,
];

// El método `reduce` de Array nos permite generar un único valor a partir
// de un array de valores. Aquí lo estamos usando para sumar los valores del
// array `populations`.
//
// El parámetro `population` en la función de retorno tiene un tipo inferido de `number`.
// Cambia el valor inicial (`false`) a un valor con el mismo tipo que `population`.
// Esto debería corregir el error de tipo en la línea 23.
//
// Pista: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

const sumOfPopulations = populations.reduce((total, population) => {
    return total + population;
}, 0); // Se cambia el valor inicial de `false` a `0`, ya que `population` es de tipo `number`

console.log(sumOfPopulations); // Se imprime la suma de las poblaciones

// ----

export {};

/**
 * En este código TypeScript:

Se utiliza el método reduce en el array populations para sumar todos los valores contenidos en el array.
El valor inicial de la suma (total) es importante para que reduce funcione correctamente. Dado que los elementos de populations son números, 
el valor inicial debe ser un número.
Se cambia el valor inicial de false a 0, ya que population es de tipo number. Esto corrige el error de tipo y permite que la suma se realice 
correctamente.
 */