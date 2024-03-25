/**
 * START: Sigue las instrucciones a continuación.
 */

function getPopulation(): any {
    return 69_950_850;
}

// Agrega una aserción de tipo después de llamar a `getPopulation()`.
// Pista: ¿Cuál es el tipo real del valor devuelto por `getPopulation()`?

const population = getPopulation() as number; // Aserción de tipo a number

// Ahora que has agregado una aserción de tipo, hay un error de tipo en el código siguiente.
// Elimina el código que es incorrecto.

console.log(population.toUpperCase()); // Error: toUpperCase no es una función de number, debe ser de tipo string
console.log(population * 2); // Correcto: population es de tipo number y puede ser multiplicado

// ----

export {};

/*
En la función getPopulation, se devuelve un número, pero el tipo de retorno está especificado como any. Luego, después de llamar a getPopulation(),
 se utiliza una aserción de tipo para especificar que el tipo de population es number, ya que sabemos que el valor devuelto por getPopulation() es 
 un número.

Después de la aserción de tipo, se intenta llamar a toUpperCase() en population, lo cual es un error ya que toUpperCase() es un método de
 la clase String y no está disponible en number. Por lo tanto, se debe eliminar esa línea.

La segunda línea, donde population se multiplica por 2, es correcta, ya que population es de tipo number.
*/