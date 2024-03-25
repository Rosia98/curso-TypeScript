/**
 * START: Sigue las instrucciones a continuación.
 */

// Haz que la interfaz `LanguagesType` sea genérica.
// Esto debería corregir los errores de tipo en las líneas 14 y 21.
// Pista: El tipo para la propiedad `languages` debería usar una variable de tipo.

interface Country<LanguagesType> {
    name: string;
    languages: LanguagesType; // Haciendo la interfaz genérica
}

const languagesObj1: Country<string> = {
    name: "New Zealand",
    languages: "English, Māori"
};

console.log(languagesObj1.languages); // Correcto, languagesObj1.languages es de tipo string

const languagesObj2: Country<string[]> = {
    name: "Spain",
    languages: ["Spanish", "Catalan", "Galician", "Basque", "Valencian"],
};

console.log(languagesObj2.languages.join(", ")); // Correcto, languagesObj2.languages es de tipo string[]

// ----

export {};


/**
 * En este código TypeScript:

La interfaz Country se hace genérica mediante la introducción de un parámetro de tipo LanguagesType. Esto permite que la propiedad languages 
de un objeto Country tenga un tipo dinámico que se especifica al crear una instancia de la interfaz Country.
languagesObj1 se declara como Country<string>, lo que indica que la propiedad languages es de tipo string. Esto permite asignar una cadena a 
languagesObj1.languages, lo que es correcto.
languagesObj2 se declara como Country<string[]>, lo que indica que la propiedad languages es de tipo string[] (un array de strings).
 Esto permite asignar un array de strings a languagesObj2.languages, lo que también es correcto.
Estas correcciones resuelven los errores de tipo en las líneas 14 y 21. Ahora, languagesObj1.languages y languagesObj2.languages tienen 
el tipo correcto según la definición de la interfaz Country.
 */