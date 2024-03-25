/**
 * START: Sigue las instrucciones a continuación.
 */

// Evita que el array sea modificado.
// Usa el tipo de interfaz genérico `ReadonlyArray`: ReadonlyArray<type>
// Esto causará un error de tipo. Elimina el código que ahora tiene un error de tipo.

const languages: ReadonlyArray<string> = ["Mongolian", "French", "Basque", "Thai"]; // Se utiliza el tipo `ReadonlyArray<string>`

// languages[2] = "Hausa"; // Error: No se puede asignar a un array de solo lectura

console.log(languages); // Se imprime el array de idiomas

// Evita que el array sea modificado.
// Usa el modificador readonly y la sintaxis de tipo de array literal: readonly type[]
// Esto causará un error de tipo. Elimina el código que ahora tiene un error de tipo.

const currencies: readonly string[] = ["NZD", "THB", "NGN", "EUR", "COP", "INR"]; // Se utiliza la sintaxis de tipo de array literal `readonly string[]`

// currencies.reverse(); // Error: No se puede modificar un array de solo lectura

console.log(currencies); // Se imprime el array de monedas

// ----

export {};

/**
 * En este código TypeScript:

Se utiliza el tipo de interfaz genérico ReadonlyArray<type> para el array languages, lo que lo hace de solo lectura y previene que se modifique. 
Cualquier intento de modificar el array causará un error de tipo.
Se utiliza la sintaxis de tipo de array literal readonly type[] junto con el modificador readonly para el array currencies, lo que también lo hace
 de solo lectura. Intentar modificar este array también causará un error de tipo.
 */