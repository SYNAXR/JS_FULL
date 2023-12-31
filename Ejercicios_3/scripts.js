//Función que obtenga un número aleatorio entre 501 y 600
const aleatorio = () => console.info(Math.round((Math.random() * 100) + 500))

aleatorio()

//Función que revise un número y revise si es capicúa
const capicua = (numero = 0) => {
    if (!numero) return console.warn("No ingresaste un número");
    if (typeof numero !== "number") return console.error(`El valor "${numero}" ingresado NO es un número.`)
    numero = numero.toString();
    let alReves = numero.split("").reverse().join("");
return(numero === alReves)
    ? console.info(`Sí es capicúa. Número original ${numero}, número al revés ${alReves}.`)
    : console.info(`No es capicúa. Número original ${numero}, número al revés ${alReves}.`)
}

capicua()
capicua("19")
capicua({})
capicua(111)
capicua(20)
capicua(555)
capicua(6565)

//Función que calcula el factorial de un número
const factorial = (number = undefined) => {
    if (number === undefined) return console.warn(`No ingresaste un número.`);
    if (typeof number !== "number") return console.error(`El valor "${number}" NO es un número.`);
    if (number === 0) return console.error(`El número no puede ser 0.`);
    if (Math.sign(number) === -1) return console.error(`El número no puede ser negativo.`);
    let factorial = 1;
    for (let i = number; i > 1; i--) {
        factorial *= i;
    }
    return console.info(`El factorial de ${number} es ${factorial}.`)
}
factorial()
factorial("5")
factorial([1, 2, 3])
factorial(0)
factorial(-50)
factorial(5)


