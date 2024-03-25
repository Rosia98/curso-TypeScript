/**
 * START: Sigue las instrucciones a continuación.
 */

interface Country {
    name: string;
    code: string;
    languages: string[];
    currency?: string;
    population: number;
}

// Cambia el tipo `PartialCountry` para usar el tipo utilitario `Partial`.
// Esto debería corregir el error de tipo para el objeto `countryA`.
type PartialCountry = Partial<Country>; // Se utiliza el tipo utilitario `Partial` para hacer que todas las propiedades sean opcionales

const countryA: PartialCountry = {
    code: "CN",
    population: 1_412_600_000,
};

// Cambia el tipo `CompleteCountry` para usar el tipo utilitario `Required`.
// Esto debería causar un error de tipo para el objeto `countryB`.
// Corrige el error de tipo agregando la propiedad que falta al objeto.
type CompleteCountry = Required<Country>; // Se utiliza el tipo utilitario `Required` para hacer que todas las propiedades sean obligatorias

const countryB: CompleteCountry = {
    name: "Greece",
    code: "GR",
    languages: ["Greek"],
    population: 10_678_632,
    currency: "Euro", // Se agrega la propiedad `currency` que falta para corregir el error de tipo
};

// Cambia el tipo `ReadonlyCountry` para usar el tipo utilitario `Readonly`.
// Esto debería causar un error de tipo en el código siguiente.
// Elimina el código que es incorrecto.
type ReadonlyCountry = Readonly<Country>; // Se utiliza el tipo utilitario `Readonly` para hacer que todas las propiedades sean de solo lectura

const countryC: ReadonlyCountry = {
    name: "Italy",
    code: "IT",
    languages: ["Italian"],
    population: 60_317_116,
};

// countryC.population = 60_317_117; // Esta línea genera un error de tipo ya que `population` es de solo lectura

console.log(countryC);

// Cambia el tipo `CountryWithPopulation` para usar el tipo utilitario `Pick`.
// Pista: La sintaxis es: Pick<Tipo, Claves>
// Esto debería corregir el error de tipo para el objeto `countryD`.
type CountryWithPopulation = Pick<Country, "name" | "code" | "population">; // Se utiliza el tipo utilitario `Pick` para seleccionar solo algunas propiedades de `Country`

const countryD: CountryWithPopulation = {
    name: "New Zealand",
    code: "NZ",
    population: 5_135_300,
};

// Cambia el tipo `CountryWithoutPopulation` para usar el tipo utilitario `Omit`.
// Esto debería corregir el error de tipo para el objeto `countryE`.
type CountryWithoutPopulation = Omit<Country, "population">; // Se utiliza el tipo utilitario `Omit` para excluir la propiedad `population` de `Country`

const countryE: CountryWithoutPopulation = {
    name: "Thailand",
    code: "TH",
    languages: ["Thai", "Isan", "Kam Mueang", "Pak Tai", "Malay"],
    currency: "Baht",
};

// ----

export {};

/**
 * Explicación:

Se utiliza el tipo utilitario Partial para crear el tipo PartialCountry, lo que hace que todas las propiedades de Country sean opcionales. 
Esto permite crear objetos con un subconjunto de propiedades.
Se utiliza el tipo utilitario Required para crear el tipo CompleteCountry, lo que hace que todas las propiedades de Country sean obligatorias. 
Esto garantiza que no falte ninguna propiedad en el objeto countryB.
Se utiliza el tipo utilitario Readonly para crear el tipo ReadonlyCountry, lo que hace que todas las propiedades de Country sean de solo lectura. 
Esto evita que se puedan modificar las propiedades del objeto countryC.
Se utiliza el tipo utilitario Pick para crear el tipo CountryWithPopulation, seleccionando solo las propiedades name, code y population de Country.
Esto garantiza que solo se puedan crear objetos con esas propiedades.
Se utiliza el tipo utilitario Omit para crear el tipo CountryWithoutPopulation, excluyendo la propiedad population de Country. Esto permite crear 
objetos countryE sin la propiedad population.
 */