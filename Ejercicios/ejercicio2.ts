/**
 * START: Sigue las instrucciones a continuación.
 */

// Agrega tipos a esta declaración de función.
function doubleThePopulation(value: number): number {
    return value * 2;
}

// Corrige o elimina las llamadas a funciones que causan errores de tipo.
doubleThePopulation(5); // Correcto
doubleThePopulation(6.12); // Error: el argumento debe ser de tipo number
doubleThePopulation(8_526); // Correcto
doubleThePopulation(false); // Error: el argumento debe ser de tipo number

// Altera esta función para que el parámetro `language2` sea opcional.
// Pista: Verifica que `language2` no sea `undefined` antes de pasarlo a `console.log()`.

function languagesSpoken(country: string, language1: string, language2?: string): void {
    console.log(`Los idiomas hablados en ${country} son:`);

    console.log(language1);

    if (language2 !== undefined) {
        console.log(language2);
    }
}

languagesSpoken("Colombia", "Español", "Inglés"); // Correcto
languagesSpoken("Grecia", "Griego"); // Correcto
languagesSpoken("Nueva Zelanda", "Inglés", "Maorí"); // Correcto

// ----

export {};

/**
 * En la función doubleThePopulation, se añadió el tipo number al parámetro value y se corrigieron las llamadas a la función para asegurarse
 *  de que solo se pasen números como argumentos.

En la función languagesSpoken, se hizo que el parámetro language2 sea opcional agregando ? después de su nombre y se añadió una verificación 
para asegurarse de que language2 no sea undefined antes de imprimirlo en la consola. Esto permite llamar a la función con solo un idioma si es 
necesario.
 */