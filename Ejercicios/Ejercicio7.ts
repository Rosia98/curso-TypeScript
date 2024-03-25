/**
 * START: Sigue las instrucciones a continuación.
 */

// Agrega una anotación de tipo a esta variable que describa el objeto que contiene.
// La variable `countryPopulation` contiene un objeto con las propiedades `code` y `population`,
// donde `code` es una cadena que representa el código del país y `population` es un número que representa la población del país.

const countryPopulation: { code: string; population: number } = {
    code: "NZ",
    population: 5_135_300,
};

// Define una interfaz `Country` que describa el objeto en esta variable.
// Agrega el tipo `Country` como una anotación de tipo para esta variable.
// La interfaz `Country` describe un objeto con las propiedades `name`, `code` y `population`,
// donde `name` es una cadena que representa el nombre del país,
// `code` es una cadena que representa el código del país y
// `population` es un número que representa la población del país.

interface Country {
    name: string;
    code: string;
    population: number;
}

const countryData: Country = {
    name: "India",
    code: "IN",
    population: 1_352_642_280,
};

// Define un alias de tipo `Currency` que describa el objeto en esta variable.
// Agrega el tipo `Currency` como una anotación de tipo para esta variable.
// El alias de tipo `Currency` describe un objeto con las propiedades `name`, `code` y `symbol`,
// donde `name` es una cadena que representa el nombre de la moneda,
// `code` es una cadena que representa el código de la moneda y
// `symbol` es una cadena que representa el símbolo de la moneda.

type Currency = {
    name: string;
    code: string;
    symbol: string;
};

const currencyData: Currency = {
    name: "Euro",
    code: "EUR",
    symbol: "€",
};

// ----

export {};

/**
 * En este código TypeScript:

Para la variable countryPopulation, se añade una anotación de tipo en la forma de un objeto literal que describe las propiedades code y population, indicando que code es una cadena y population es un número.
Se define una interfaz Country que describe el objeto contenido en la variable countryData, especificando las propiedades name, code y population.
Se define un alias de tipo Currency para el objeto contenido en la variable currencyData, especificando las propiedades name, code y symbol.
 */