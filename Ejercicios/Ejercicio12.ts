/**
 * START: Sigue las instrucciones a continuación.
 */

// Agrega una anotación de tipo para este array.
// Usa la sintaxis de tipo de array literal: type[]
// Pista: Observa el tipo que TypeScript ha inferido.

const currencies1: string[] = ["NZD", "THB", "NGN"]; // Se utiliza la sintaxis de tipo de array literal `string[]`

// Agrega una anotación de tipo para este array.
// Usa el tipo de interfaz genérico `Array`: Array<type>

const currencies2: Array<string> = ["EUR", "COP", "INR"]; // Se utiliza el tipo de interfaz genérico `Array<string>`

// Agrega una anotación de tipo para este array.
// Usa la sintaxis de tipo de array literal: type[]

const populations1: number[] = [50_372_424, 1_352_642_280, 211_400_708]; // Se utiliza la sintaxis de tipo de array literal `number[]`

// Agrega una anotación de tipo para este array.
// Usa el tipo de interfaz genérico `Array`: Array<type>

const populations2: Array<number> = [5_135_300, 331_893_745, 1_412_600_000]; // Se utiliza el tipo de interfaz genérico `Array<number>`

// ----

// Usarás esta interfaz para describir la forma de los objetos en los
// arrays a continuación. Cambia los tipos de las propiedades en esta interfaz
// para que sean correctos.

interface Country {
    name: string; // Se cambia `never` a `string` para la propiedad `name`
    code: string;
    population: number; // Se cambia `never` a `number` para la propiedad `population`
}

// Agrega una anotación de tipo para este array de objetos.
// Usa la sintaxis de tipo de array literal: Type[]
// Pista: Haz uso del tipo `Country`.

const countries1: Country[] = [
    {
        name: "China",
        code: "CN",
        population: 1_412_600_000,
    },
    {
        name: "Italy",
        code: "IT",
        population: 60_317_116,
    },
];

// Agrega una anotación de tipo para este array de objetos.
// Usa el tipo de interfaz genérico `Array`: Array<type>
// Pista: Haz uso del tipo `Country`.

const countries2: Array<Country> = [
    {
        name: "Thailand",
        code: "TH",
        population: 69_950_850,
    },
    {
        name: "Greece",
        code: "GR",
        population: 10_678_632,
    },
];

// ----

export {};

/**
 * En este código TypeScript:

Se añaden anotaciones de tipo para los arrays currencies1, currencies2, populations1 y populations2, utilizando la sintaxis de tipo de array 
literal type[] y el tipo de interfaz genérico Array<type>, dependiendo del caso.
Se actualiza la interfaz Country para corregir los tipos de las propiedades name y population, cambiando never por string y number respectivamente.
Se añaden anotaciones de tipo para los arrays de objetos countries1 y countries2, utilizando la sintaxis de tipo de array literal Type[] y el tipo 
de interfaz genérico Array<type>, dependiendo del caso, y haciendo uso del tipo Country para describir la forma de los objetos en los arrays.
 */