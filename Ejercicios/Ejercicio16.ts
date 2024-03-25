/**
 * START: Sigue las instrucciones a continuación.
 */

class Currency {
    // Agrega tipos para estos campos y hazlos privados.
    // Pista: Observa el tipo de valores que se pasan cuando se llama `new Currency()`
    // a continuación.

    private name: string;
    private code: string;
    private symbol: string;

    // Agrega tipos a los parámetros del constructor.

    constructor(name: string, code: string, symbol: string) {
        this.name = name;
        this.code = code;
        this.symbol = symbol;
    }

    // Los métodos son públicos por defecto.
    // Agrega un modificador de visibilidad para dejar claro que este método es público.
    //
    // Agrega un tipo de retorno para este método
    // Pista: Observa el tipo de retorno inferido.

    public describe(): void {
        // Reemplaza los valores `null` a continuación con los valores de los campos apropiados.
        // Pista: Accede a los valores de los campos con: this.nombreCampo

        let description = `The ${this.name} currency `;
        description += `has the code ${this.code} `;
        description += `and uses the symbol ${this.symbol}.`;

        console.log(description);
    }
}

// ----

const currencyNaira = new Currency("Naira", "NGN", "₦");

console.log(currencyNaira);

// Llama al método `describe()` en el objeto `currencyNaira`.
currencyNaira.describe(); // Describe la moneda Naira

// ----

const currencyUsDollar = new Currency("United States dollar", "USD", "$");

console.log(currencyUsDollar);

// Llama al método `describe()` en el objeto `currencyUsDollar`.
currencyUsDollar.describe(); // Describe la moneda Dólar estadounidense

// ----

export {};


/**
 * Explicación:

Se agregan tipos a los campos name, code y symbol de la clase Currency, haciéndolos privados para encapsular su acceso y modificación dentro de
 la clase.
Se agregan tipos a los parámetros del constructor name, code y symbol.
Se modifica el método describe() para que sea público (public) y se agrega un tipo de retorno explícito void.
Dentro del método describe(), se utilizan los campos de la instancia this.name, this.code y this.symbol en lugar de los valores null 
para construir la descripción de la moneda.
Se crea una instancia de Currency para las monedas "Naira" y "United States dollar", se imprimen las instancias y se llama al método 
describe() en cada una para mostrar su descripción.
 */