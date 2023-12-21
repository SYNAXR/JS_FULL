console.clear()
console.log(console)
console.error("Esto es un error")
console.warn("Esto es una advertencia")
console.info("Esto es un mensaje informativo")
console.log(document)
console.dir(document)

console.group("Cursos de @JonMircha en Youtube")
console.log("JavaScript")
console.log("Node.js")
console.log("Flexbox")
console.log("Diseno")
console.groupEnd()

console.log(console)
console.table(Object.entries(console).sort())

const numbers = [1, 2, 3, 4, 5]
const vowels = ["a", "e", "i", "o", "u"]

console.table(numbers)
console.table(vowels)

const perro = {
    nombre: "Bunny",
    raza: "Boxer",
    color: "Brown"
}

console.table(perro)

console.time("Cuánto tiempo tarda mi código")

const arreglo = Array(1000000)

for(let i = 0; i < arreglo.length; i++) {
    arreglo[i] = i;
}

console.timeEnd("Cuánto tiempo tarda mi código")

for(let i = 0; i < 100; i++) {
    console.count("For")
    console.log(i)
}

let x = 3
let y = 2
pruebaXY = "Se espera que X siempre sea menor que Y"

console.assert(x < y, {x, y, pruebaXY})