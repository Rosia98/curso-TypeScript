/**
 * START: Sigue las instrucciones a continuación.
 */

// Cambia la interfaz `Country` para que la propiedad `population` sea opcional.
// Esto solucionará el error de tipo para `countryB`.

interface Country {
    name: string;
    code: string;
    population?: number; // Se hace opcional la propiedad `population`
}

const countryA: Country = {
    name: "India",
    code: "IN",
    population: 1_352_642_280,
};

const countryB: Country = {
    name: "Italy",
    code: "IT"
}; // Correcto, ahora `population` es opcional y no hay error de tipo

const countryC: Country = {
    name: "Spain",
    code: "ES",
    population: 47_450_795,
};

// Cambia el alias de tipo `Currency` para que la propiedad `name` no pueda cambiarse.
// Esto causará un error de tipo. Elimina el código que ahora tiene un error de tipo.

type Currency = {
    readonly name: string; // Se hace `name` de solo lectura
    code: string;
    symbol: string;
};

const currencyData: Currency = {
    name: "Euro",
    code: "EUR",
    symbol: "€",
};

currencyData.name = "Gold"; // Error: No se puede asignar a la propiedad de solo lectura `name`
currencyData.code = "GGG"; // Correcto, `code` no es de solo lectura

// ----

export {};

/**
 * En este código TypeScript:

Se cambia la interfaz Country para que la propiedad population sea opcional agregando el signo de interrogación ? después de su nombre. 
Esto permite que countryB no tenga que proporcionar la propiedad population, lo que soluciona el error de tipo.
Se cambia el alias de tipo Currency para hacer que la propiedad name sea de solo lectura utilizando la palabra clave readonly. 
Esto significa que una vez que se inicializa name, no se puede cambiar. Por lo tanto, la asignación currencyData.name = "Gold" genera 
un error de tipo y se elimina del código para corregir el error.
 */