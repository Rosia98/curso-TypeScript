/**
 * START: Sigue las instrucciones a continuación.
 */

type CountryData = {
    name: string;
    languages: string[];
    population: number;
};

// Completa la sintaxis para este tipo mapeado.
// Pista: Los tipos mapeados son genéricos.
//
// Reemplaza el tipo `never` con el tipo correcto.
//
// Estos cambios deberían corregir todos los errores de tipo.

type Descriptions<Type> = {
    [Property in keyof Type]: string; // Se cambia `never` por `string` para representar las descripciones
};

const countryDataDescriptions: Descriptions<CountryData> = {
    name: "The name of the country.", // Descripción para la propiedad `name`
    languages: "The languages spoken in the country.", // Descripción para la propiedad `languages`
    population: "The population of the country.", // Descripción para la propiedad `population`
};

// ----

export {};

/**
 * Explicación:

Se define un tipo CountryData que describe la estructura de los datos de un país, con propiedades como name, languages, y population.
Se define un tipo mapeado llamado Descriptions, que toma un parámetro genérico Type. Este tipo mapeado itera sobre las propiedades 
de Type utilizando la sintaxis [Property in keyof Type], donde Property representa cada propiedad de Type.
En el tipo mapeado Descriptions, se asigna el tipo string a cada propiedad de Type, lo que indica que cada propiedad debe tener 
una descripción de tipo cadena.
Se crea un objeto countryDataDescriptions utilizando el tipo mapeado Descriptions, donde se proporciona una descripción para cada propiedad 
de CountryData, como "The name of the country." para la propiedad name, "The languages spoken in the country." para la propiedad languages, 
y "The population of the country." para la propiedad population.
 */