//Función expresada(no puede ser llamada antes de su posición en el código)
// hola() //Esto provoca un error.
const hola = function() {
    console.log("Hola")
}

//Función declarada(puede ser llamada antes de estar declarada)
hello()
function hello() {
    console.log("Hello")
}

//Funciones flecha
const hi = () => console.log("Hi")
hi()

const hi2 = name => console.log(`Hi, ${name}`)
hi2("Irma")

/* const sumar = function (a, b) {
    return a + b
}

console.log(sumar(8, 9)) */

const sumar = (a, b) => a + b

console.log(sumar(8,9))

const funcionDeVariasLineas = () => {
    console.log("Uno")
    console.log("Dos")
    console.log("Tres")
}

funcionDeVariasLineas()

/* const numeros = [1, 2, 3, 4, 5]

numeros.forEach(function(el, index) {
    console.log(`El elemento ${el} está en la posición ${index}`)
}) */

const numeros = [1, 2, 3, 4, 5]

numeros.forEach((el, index) => console.log(`${el} está en la posición ${index}`)
)

/* function perro() {
    console.log(this)
}

perro() */

//Diferencias a la hora de llamar a funciones declaradas y funciones flecha
const perro = {
    nombre: "Kenai",
    ladrar: function() {
        console.log(this)//Envía información del contexto exacto
    }
}

perro.ladrar()

const dog = {
    name: "Kenai",
    waff:() => {
        console.log(this)//Envía información del contexto superior
    }
}

dog.waff()