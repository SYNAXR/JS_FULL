//Función que convierta una base binaria en una base decimal.
const convertirBinario = (numero = undefined, base = undefined) => {
    if (numero === undefined) return console.warn(`No ingresaste un número a convertir.`);
    if (typeof numero !== "number") return console.error(`El valor "${numero}" NO es un número.`);
    if (base === undefined) return console.warn(`No ingresaste la base a convertir.`);
    if (typeof base !== "number") return console.error(`El valor "${base}" NO es un número.`);
    if (base === 2) {
        return console.info(`${numero} base ${base} = ${parseInt(numero, base)} base 10`);
    }
    else if (base === 10) {
        console.info(`${numero} base ${base} = ${(numero.toString(base))} base 2`);
    }
    else {
        console.error(`El tipo de base a convertir NO es válido.`)
    }
}

convertirBinario()
convertirBinario(100)
convertirBinario(100, "4")
convertirBinario("25", 2)
convertirBinario(100, 2)
convertirBinario(101, 2)
convertirBinario(4, 10)
convertirBinario(4, 6)

//Función que te devuelva el monto final después de aplicar un descuento.
const descontar = (monto = undefined, descuento = 0) => {
    if (monto === undefined) return console.warn(`No ingresaste un monto.`);
    if (typeof monto !== "number") return console.error(`El valor "${monto}" NO es un número.`);
    if (Math.sign(monto) == -1) return console.error(`El monto ingresado no puede ser negativo`);
    if (monto === 0) return console.error(`El monto ingresado no puede ser 0.`);
    if (typeof descuento !== "number") return console.error(`El valor "${descuento}" NO es un número.`);
    if (Math.sign(descuento) == -1) return console.error(`El descuento ingresado no puede ser negativo`);
    return console.info(`${monto} - ${descuento}% = ${monto - ((monto * descuento) / 100)} `)
}

descontar()
descontar("200")
descontar(0)
descontar(-1000)
descontar(1000, -20)
descontar(1000, "20")
descontar(1000)
descontar(1000, 25)

//Función que dada una fecha válida determine cuántos años han pasado hasta la fecha actual
const calcYear = (date = undefined) => {
    if (date === undefined) return console.warn(`No ingresaste una fecha.`);
    if (!(date instanceof Date)) return console.error(`El valor ingresado no es una fecha válida.`);
    let yearsInMiliseconds = new Date().getTime() - date.getTime()
    let yearsPast = Math.floor((yearsInMiliseconds / 86000000) / 365)
    if (Math.sign(yearsPast) == -1) return console.info(`Faltan ${Math.abs(yearsPast)} años para esa fecha.`)
    return console.info(`Han pasado ${yearsPast} años.`)
   
}
calcYear()
calcYear(false)
calcYear("Hola")
calcYear({})
calcYear(new Date(1997, 6, 7))
calcYear(new Date(2025, 10, 30))
calcYear(new Date())