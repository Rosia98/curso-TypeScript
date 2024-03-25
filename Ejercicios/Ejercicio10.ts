/**
 * START: Sigue las instrucciones a continuación.
 */

// Haz que esta función de identidad sea genérica.
// Esto debería corregir los errores de tipo en las líneas 13 y 15.
// Pista: El tipo para el parámetro de función `value` debería usar una variable de tipo.

function identity<T>(value: T): T {
    return value;
}

let value1 = identity<string>("France"); // Correcto, value1 es de tipo string
let value2 = identity<number>(67_413_000); // Correcto, value2 es de tipo number

// ----

async function fetchData<Type>(url: string) {
    const response = await fetch(url);
    const responseBody = await response.json();

    return responseBody as Type;
}

interface User {
    name: string;
}

// Pasa el tipo `User` como un argumento de tipo a la función genérica `fetchData()`.
// Esto debería corregir el error de tipo en la línea 35.

let user = await fetchData<User>("http://api.com/user/1");

console.log(user.name); // Correcto, se accede a la propiedad `name` del usuario

// ----

export {};

/**
 * En este código TypeScript:

La función identity se convierte en una función genérica al introducir un parámetro de tipo T. Este parámetro se usa para el tipo de entrada
 y el tipo de salida de la función. Esto permite que la función identity acepte cualquier tipo de argumento y devuelva el mismo tipo.
Se llama a identity<string>("France") y identity<number>(67_413_000) con argumentos de tipo string y number respectivamente, lo que es correcto 
y no produce errores de tipo.
La función fetchData se define como genérica también, tomando un parámetro de tipo Type. Esto permite que la función devuelva el tipo especificado 
al realizar una solicitud a la URL proporcionada.
Al llamar a fetchData<User>("http://api.com/user/1"), se asegura que user tenga el tipo User, lo que permite el acceso seguro a la propiedad name 
en la línea 35.
 */