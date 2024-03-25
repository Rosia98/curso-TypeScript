/**
 * START: Sigue las instrucciones a continuación.
 */

// Agrega una anotación de tipo de tupla para esta tupla.

const countryPopulation: [string, number] = ["China", 1_412_600_000]; // Se utiliza la sintaxis de tipo de tupla [string, number]

// Cambia el tipo `CountryWithPopulation` a un tipo de tupla.
// Esto debería corregir el error de tipo en la línea 14.

type CountryWithCurrency = [string, string, string]; // Se cambia `CountryWithCurrency` a un tipo de tupla con tres elementos de tipo string

const countryCurrency: CountryWithCurrency = ["Italy", "Euro", "EUR"]; // Se proporcionan los valores correctos para la tupla

// Agrega una anotación de tipo de tupla que evite que esta tupla sea modificada.
// Usa el modificador readonly y la sintaxis de tipo de tupla: readonly [type, type]
// Esto causará un error de tipo. Elimina el código que ahora tiene un error de tipo.

const countryLanguage: readonly [string, string] = ["Greece", "Greek"]; // Se utiliza la sintaxis de tipo de tupla `readonly [string, string]`

// countryLanguage.reverse(); // Error: No se puede modificar una tupla de solo lectura

console.log(countryLanguage); // Se imprime la tupla de país e idioma

// ----

export {};

/**
 * En este código TypeScript:

Se agrega una anotación de tipo de tupla [string, number] para la tupla countryPopulation, indicando que el primer elemento es una cadena 
(el nombre del país) y el segundo elemento es un número (la población del país).
Se cambia el tipo CountryWithCurrency a un tipo de tupla [string, string, string], especificando que la tupla tiene tres elementos, 
todos de tipo cadena. Esto soluciona el error de tipo en la línea 14.
Se utiliza la sintaxis de tipo de tupla readonly [string, string] para countryLanguage, lo que hace que la tupla sea de solo lectura. 
Cualquier intento de modificar la tupla causará un error de tipo.

 */