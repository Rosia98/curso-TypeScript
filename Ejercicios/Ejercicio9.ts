/**
 * START: Sigue las instrucciones a continuación.
 */

interface Country {
    name: string;
    code: string;
}

// Completa la interfaz `CountryWithPopulation`:
//
// - Extiende la interfaz `Country`
// - Agrega una propiedad `population` con un tipo adecuado

interface CountryWithPopulation extends Country {
    population: number; // Se agrega la propiedad `population` con tipo `number`
}

const countryA: CountryWithPopulation = {
    name: "India",
    code: "IN",
    population: 1_352_642_280,
};

const countryB: Country = {
    name: "Italy",
    code: "IT"
}; // Correcto, `countryB` sigue siendo de tipo `Country`

const countryC: CountryWithPopulation = {
    name: "Spain",
    code: "ES",
    population: 47_450_795,
};

// ----

export {};

/**
 * En este código TypeScript:

Se define la interfaz Country que describe las propiedades comunes de un país, como name y code.
Se solicita completar la interfaz CountryWithPopulation que extiende la interfaz Country para incluir la propiedad population con un tipo adecuado.
Se completa la interfaz CountryWithPopulation agregando la propiedad population con un tipo number, lo que permite especificar la población de
 un país.
Se declaran las variables countryA, countryB y countryC que siguen las interfaces CountryWithPopulation y Country según corresponda.
 */