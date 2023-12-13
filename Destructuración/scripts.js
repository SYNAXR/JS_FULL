//Sin destructuración

const numeros = [1, 2, 3]

let uno = numeros[0]
let dos = numeros[1]
let tres = numeros[2]

console.log(uno, dos, tres)

//Con destruturación

const [one, two, three] = numeros
console.log(one, two, three)

const persona = {
    nombre: "Aurelio",
    apellido: "Crespo",
    edad: 26
}

let {nombre, apellido, edad} = persona
console.log(nombre, apellido, edad)