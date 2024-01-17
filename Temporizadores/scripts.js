console.log(`Inicio.`)

/* setTimeout(() => {
    console.info(`Ejecutando un setTimeOut, esto se ejecuta una sola vez.`)
}, 3000)

setInterval(() => {
    console.info(`Ejecutando un setInterval, esto se ejecuta indefinidamente según el intervalo.`)
}, 3000) */

/* setInterval(() => {
    console.log(new Date().toLocaleTimeString())
}, 1000) */

let temporizador = setTimeout(() => {
    console.info(`Ejecutando un setTimeOut, esto se ejecuta una sola vez.`)
}, 3000)

clearTimeout(temporizador)

let intervalo = setInterval(() => {
    console.info(`Ejecutando un setInterval, esto se ejecuta indefinidamente según el intervalo.`)
}, 1000)

clearInterval(intervalo)