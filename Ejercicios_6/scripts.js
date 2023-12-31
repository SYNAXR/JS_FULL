//Función que cuenta la cantidad de vocales y consonantes en un string
const contar_letras = (string = "") => {
    if (!string) return console.warn(`No ingresaste una cadena de texto.`);
    if (typeof string !== "string") return console.error(`El valor ingresado no es una cadena de texto.`);
    let vocales = 0
    let consonantes = 0
    string = string.toLowerCase()
    for (let letra of string) {
        if (/[aeiouáéíóú]/.test(letra)) {
            vocales++;
        }
        if (/[qwrtypsdfghjklzxcvbnm]/.test(letra)) {
            consonantes++;
        }
    }
    return console.info({
        string,
        vocales,
        consonantes
    })
}

contar_letras()
contar_letras(3)
contar_letras("Hola Mundo")

//Función que valide que un texto sea un nombre válido
const validarNombre = (nombre = "") => {
    if (!nombre) return console.warn(`No ingresaste un nombre.`);
    if (typeof nombre !== "string") return console.error(`El valor ingresado no es una cadena de texto.`);
    let expReg = /^[A-Za-záéíóú\s]+$/.test(nombre);
    return (expReg)
    ? console.info(`"${nombre}" es un nombre válido.`)
    : console.info(`"${nombre}" NO es un nombre válido.`)
}

validarNombre()
validarNombre(4)
validarNombre("Aurelio")
validarNombre("Aurelio Crespo")
validarNombre("Aurelio CR7")

//Función que valide que un texto sea un email válido
const validarEmail = (email = "") => {
    if (!email) return console.warn(`No ingresaste un email.`);
    if (typeof email !== "string") return console.error(`El valor ingresado no es una cadena de texto.`);
    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/.test(email);
    return (expReg)
    ? console.info(`"${email}" es un email válido.`)
    : console.info(`"${email}" NO es un email válido.`)
}

validarEmail()
validarEmail(34)
validarEmail("kate@Gmail.com")
validarEmail("synnergy1727@gmail.c.m")
validarEmail("synnergy1727.gmail")
validarEmail("synnergy1727@gmail.c")
validarEmail("mister7shanelight@gmail.com")
validarEmail("synaxr777@gmail.com")
validarEmail("synnergy1727@gmail.com")
validarEmail("syn.ergy@instagram.cu")