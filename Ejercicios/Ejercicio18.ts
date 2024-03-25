/**
 * START: Sigue las instrucciones a continuación.
 */

// Los objetos en el array `countries` utilizan cadenas como valores de las
// propiedades `currency`.
// Completa este enum numérico para que pueda ser usado en lugar de cadenas.
// Pista: Utiliza los valores de cadena en las propiedades `currency` como los miembros del enum.

enum Currency {
    Euro,
    Dollar,
}

// Actualiza el tipo para la propiedad `currency` en esta interfaz para usar
// el enum `Currency`.
interface Country {
    name: string;
    currency: Currency; // Se cambia el tipo de la propiedad `currency` a `Currency`
}

// Reemplaza los valores de cadena para las propiedades `currency` a continuación con

const countries: Country[] = [
    {
        name: "France",
        currency: Currency.Euro, // Se utilizan los miembros del enum `Currency`
    },
    {
        name: "United States of America",
        currency: Currency.Dollar, // Se utilizan los miembros del enum `Currency`
    },
    {
        name: "Italy",
        currency: Currency.Euro, // Se utilizan los miembros del enum `Currency`
    },
    {
        name: "New Zealand",
        currency: Currency.Dollar, // Se utilizan los miembros del enum `Currency`
    },
];

// Crea un enum de cadena llamado `LanguageStatus`. Úsalo para reemplazar los
// valores de cadena para las propiedades `status` en los objetos a continuación.
enum LanguageStatus {
    primary = "primary",
    secondary = "secondary",
}

const countryLanguages = [
    { language: "Spanish", status: LanguageStatus.primary }, // Se utilizan los miembros del enum `LanguageStatus`
    { language: "English", status: LanguageStatus.secondary }, // Se utilizan los miembros del enum `LanguageStatus`
];

// ----

export {};

/**
 * Explicación:

Se define un enum Currency con los miembros Euro y Dollar, que representan las distintas monedas utilizadas en los países.
En la interfaz Country, se cambia el tipo de la propiedad currency de string a Currency para que pueda aceptar los valores definidos en el enum.
En el array countries, se actualizan las propiedades currency de cada objeto para que utilicen los miembros del enum Currency.
Se crea un enum de cadena LanguageStatus con los miembros primary y secondary, que representan los distintos estados de idiomas en los países.
En el array countryLanguages, se actualizan las propiedades status de cada objeto para que utilicen los miembros del enum LanguageStatus.
 */