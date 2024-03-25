/**
 * START: Sigue las instrucciones a continuación.
 */

class Currency {
    private name: string;
    private code: string;
    private symbol: string;

    constructor(name: string, code: string, symbol: string) {
        this.name = name;
        this.code = code;
        this.symbol = symbol;
    }

    public describe(): void {
        let description = `The ${this.name} currency `;
        description += `has the code ${this.code} `;
        description += `and uses the symbol ${this.symbol}.`;

        console.log(description);
    }
}

// Modifica esta clase para extender la clase `Currency`.

class DetailedCurrency extends Currency {
    // Define un campo privado llamado `banknotes`.
    // Establece el tipo de campo para que se pueda utilizar para almacenar un array de números.
    private banknotes: number[];

    // Agrega un parámetro `banknotes` con el mismo tipo que el campo `banknotes`.
    constructor(name: string, code: string, symbol: string, banknotes: number[]) {
        // Corrige esta llamada al constructor padre.
        super(name, code, symbol);

        // Almacena el valor del parámetro `banknotes` en el campo correspondiente.
        this.banknotes = banknotes;
    }

    // Cambia el modificador de visibilidad de este método para que pueda ser llamado
    // por código fuera de esta clase.
    public describeBankNotes() {
        // Cambia la visibilidad del campo `name` de la clase padre para
        // que su valor se pueda leer aquí en este método de la clase hija.
        let description = `The ${this.name} currency uses the banknotes `;

        // Reemplaza `null` con el valor del campo `banknotes`.
        description += this.banknotes.join(", "); // Se utiliza el método `join()` para unir los valores de `banknotes`

        console.log(description);
    }
}

const euroCurrency = new DetailedCurrency("Euro", "EUR", "€", [500, 200, 100, 50, 20, 10, 5]);

euroCurrency.describe(); // Describe la moneda Euro utilizando el método de la clase padre
euroCurrency.describeBankNotes(); // Describe los billetes de la moneda Euro utilizando el método de la clase hija

// ----

export {};


/**
 * Explicación:

Se crea una nueva clase DetailedCurrency que extiende la clase Currency, lo que significa que hereda todos sus campos y métodos.
Se define un nuevo campo privado llamado banknotes en la clase DetailedCurrency, que se utiliza para almacenar los valores de los billetes 
de la moneda.
Se modifica el constructor de DetailedCurrency para recibir un parámetro adicional banknotes, que se asigna al campo banknotes.
Se corrige la llamada al constructor de la clase padre (Currency) dentro del constructor de DetailedCurrency, pasando los parámetros requeridos 
(name, code y symbol) utilizando super().
Se cambia el modificador de visibilidad del método describeBankNotes() a public, lo que permite que este método sea llamado desde fuera de la
 clase.
Dentro del método describeBankNotes(), se accede al campo name de la clase padre (Currency) utilizando this.name, y se concatena con la lista 
de billetes (banknotes) utilizando el método join() para convertir el array de números en una cadena legible.
 */