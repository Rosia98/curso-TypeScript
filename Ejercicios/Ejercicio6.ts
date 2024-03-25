/**
 * START: Sigue las instrucciones a continuación.
 */

// Agrega el tipo `any` para corregir los errores de tipo en el siguiente código.

let currency: any = { name: "Indian rupee" };

currency.code = "THB";

currency = "Baht";

// Corrige la declaración if en esta función para que el tipo de `value` se estreche a `string`.

function countryNameLength(value: unknown) {
    if (typeof value === "string") {
        console.log(value.length);
    }
}

countryNameLength("United States of America");

// Corrige el error de tipo que vemos al llamar a esta función.
// Pista: Reemplaza uno de los tipos `never` con un tipo diferente.

function throwCountryError(message: string): never {
    throw new Error(`Could not find country: ${message}`);
}

throwCountryError("Narnia");

// ----

export {};

/**
 * En TypeScript, el tipo any se utiliza para indicar que una variable puede tener cualquier tipo. En la función countryNameLength, 
 * el uso de typeof value === "string" estrecha el tipo de value a string, permitiendo el acceso seguro a la propiedad length.

En la función throwCountryError, se cambió uno de los tipos never a string para permitir el uso de un mensaje de error de tipo string, 
ya que never indica que la función nunca devolverá un valor y solo se usará para lanzar un error.
 */