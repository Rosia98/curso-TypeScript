/**
 * START: Sigue las instrucciones a continuación.
 */

interface Country {
    name: string;
    code: string;
}

interface CountryStatistics {
    population: number;
}

interface CountryLanguages {
    languages: string[];
}

// Cambia el tipo `CountryWithLanguages` a un tipo intersección
// que utilice las interfaces definidas arriba.
//
// Esto debería corregir el error de tipo en la línea 28.

type CountryWithLanguages = Country & CountryLanguages; // Se utiliza una intersección de `Country` y `CountryLanguages`

const countryA: CountryWithLanguages = {
    name: "Greece",
    code: "GR",
    languages: ["Greek"]
};

// Crea un tipo intersección llamado `CountryWithStatistics` que
// describe la forma del objeto abajo. Utiliza las interfaces
// definidas arriba.
//
// Usa la sintaxis de alias de tipo: type CountryWithStatistics = type;
//
// Agrega una anotación de tipo con el tipo `CountryWithStatistics` en
// la variable `countryB`.

type CountryWithStatistics = Country & CountryStatistics; // Se utiliza una intersección de `Country` y `CountryStatistics`

const countryB: CountryWithStatistics = {
    name: "China",
    code: "CN",
    population: 1_412_600_000
};

// ----

export {};

/**
 * Explicación:

Se define el tipo CountryWithLanguages como una intersección de Country y CountryLanguages, lo que significa que cualquier objeto que tenga 
las propiedades definidas en Country y CountryLanguages será válido para este tipo. Esto permite que los objetos tengan tanto las propiedades 
de un país como las propiedades de los idiomas hablados en ese país.
Se define el tipo CountryWithStatistics como una intersección de Country y CountryStatistics, lo que significa que cualquier objeto que 
tenga las propiedades definidas en Country y CountryStatistics será válido para este tipo. Esto permite que los objetos tengan tanto las 
propiedades de un país como las estadísticas relacionadas con ese país, como la población.
 */