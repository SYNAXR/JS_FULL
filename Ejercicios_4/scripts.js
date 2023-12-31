//Función que determina si un número es primo
const primo = (number) => {
    if (number === undefined) return console.warn(`No ingresaste un número.`);
    if (typeof number !== "number") return console.error(`El valor "${number}" NO es un número.`);
    if (number === 0) return console.error(`El número no puede ser 0.`);
    if (number === 1) return console.error(`El número no puede ser 1.`);
    if (Math.sign(number) === -1) return console.error(`El número no puede ser negativo.`);
    let divisible = false;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            divisible = true;
            break;
        }
    }
    return (divisible)
        ? console.log(`El número ${number} NO es primo.`)
        : console.log(`El número ${number} Sí es primo.`)
}

primo()
primo("7")
primo(-23)
primo(0)
primo(1)
primo(3)
primo(4)
primo(13)
primo(200)

//Función que determina si un número es par o impar
const impar = (numero = undefined) => {
    if (numero === undefined) return console.warn(`No ingresaste un número.`);
    if (typeof numero !== "number") return console.error(`El valor "${numero}" ingresado NO es un número.`);
    return ((numero % 2) === 0)
        ? console.info(`El número ${numero} es Par.`)
        : console.info(`El número ${numero} es Impar.`)
        
}

impar()
impar("0")
impar(0)
impar(7)
impar(4)
impar(10)

//Función que convierta grados Celsius a Farenheit y viceversa
const convert = (grades = undefined, unit = undefined) => {
    if (grades === undefined) return console.warn(`No ingresaste grados a convertir.`);
    if (typeof grades !== "number") return console.error(`El valor "${grades}" ingresado NO es un número.`);
    if (unit === undefined) return console.warn(`No ingresaste la unidad a convertir.`);
    if (typeof unit !== "string") return console.error(`El valor "${unit}" ingresado NO es una medida de temperatura."`);
    if (unit.length !== 1 || !/C|F/.test(unit)) return console.warn(`Valor de unidad no reconocido.`);
    if (unit === "C") {
        console.info(`${grades}°C = ${Math.round(grades * (9/5)) + 32}°F.`)
    }
    else if (unit === "F") {
        console.info(`${grades}°F = ${Math.round((grades -32) * (9/5))}°C.`)
    }
}

convert()
convert(45)
convert("2")
convert(30, "Rec")
convert(false, "F")
convert(0, "C")
convert(100, "C")
convert(45, "F")