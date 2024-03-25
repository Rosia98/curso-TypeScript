/**
 * START: Sigue las instrucciones a continuación.
 */

// Corrige este uso del tipo utilitario `Record` para que construya un tipo válido.
// Se debe especificar la clave y el valor que el objeto Record debe contener.

const currency: Record<string, Currency> = {
    name: "United States dollar",
    code: "USD",
    symbol: "$",
};

// Agrega una anotación de tipo a la variable `currencies` que utilice
// el tipo utilitario `Record`.
// Pista: Pasa el tipo `Currency` como el segundo argumento de tipo a `Record<>`.

interface Currency {
    name: string;
    code: string;
    symbol: string;
}

const currencies: Record<string, Currency> = {
    france: {
        name: "Euro",
        code: "EUR",
        symbol: "€",
    },
    china: {
        name: "Renminbi",
        code: "CNY",
        symbol: "¥",
    },
    colombia: {
        name: "Colombian peso",
        code: "COP",
        symbol: "$",
    }
};

// ----

export {};

/**
 * Explicación:

En el primer caso, se utiliza el tipo utilitario Record<string, Currency> para definir el tipo de currency. Esto indica que currency es un 
objeto cuyas claves son de tipo string y los valores son de tipo Currency.
En el segundo caso, se utiliza el tipo utilitario Record<string, Currency> para definir el tipo de currencies. Esto asegura que currencies es 
un objeto donde las claves son de tipo string y los valores son objetos de tipo Currency, según la interfaz Currency definida previamente.
 */