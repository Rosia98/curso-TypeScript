/**
 * START: Sigue las instrucciones a continuación.
 */

// Agrega el tipo `any` para corregir los errores de tipo en el siguiente código.

let currency: any = { name: "Indian rupee" }; // Se utiliza el tipo `any` para permitir cualquier tipo de valor

currency.code = "THB"; // Acceso dinámico permitido en el tipo `any`

currency = "Baht"; // Se asigna una cadena, ya que `currency` es de tipo `any`

// Corrige la declaración if en esta función para que el tipo de `value` se estreche a `string`.

function countryNameLength(value: unknown) {
    if (typeof value === "string") { // Se cambia el tipo a `string` para garantizar que `value` sea de tipo `string`
        console.log(value.length); // Se puede acceder a la propiedad `length` ya que `value` se ha estrechado a `string`
    }
}

countryNameLength("United States of America"); // Correcto, se llama a la función con una cadena

// Corrige el error de tipo que vemos al llamar a esta función.
// Pista: Reemplaza uno de los tipos `never` con un tipo diferente.

function throwCountryError(message: string): never { // Se cambia `never` a `string` para permitir cualquier mensaje de error de tipo `string`
    throw new Error(`Could not find country: ${message}`); // Se lanza un error con el mensaje proporcionado
}

throwCountryError("Narnia"); // Correcto, se llama a la función con un mensaje de error de tipo `string`

// ----

export {};

/*
*En este ejercicio:

Se utiliza el tipo any para currency, lo que permite asignarle cualquier tipo de valor y acceder a propiedades dinámicamente.
En la función countryNameLength, se cambia el tipo en la declaración if para estrechar el tipo de value a string, lo que permite acceder 
a la propiedad length correctamente.
En la función throwCountryError, se cambia uno de los tipos never a string, ya que la función ahora acepta un mensaje de error como argumento. 
Esto permite llamar a la función con un mensaje de error de tipo string.
 */