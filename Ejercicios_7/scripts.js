//Función que toma los # de un array y devuelve otro con los # elevados al cuadrado
const devolver_cuadrados = (arr = undefined) => {
    if (arr === undefined) return console.warn(`No ingresaste un arreglo de números.`);
    if (!(arr instanceof Array)) return console.error(`El valor que ingresaste no es un arreglo.`);
    if (arr.length === 0) return console.error(`El arreglo está vacío.`);
    for (let num of arr) {
        if (typeof num !== "number") return console.error(`El valor ${num} ingresado NO es un número.`)
    }
    const newArr = arr.map(el => el * el)
    return console.info(`Arreglo original: ${arr},\nArreglo elevado al cuadrado: ${newArr}.`);
}
let kaka = 5

devolver_cuadrados()
devolver_cuadrados(4)
devolver_cuadrados("Mircha")
devolver_cuadrados({})
devolver_cuadrados([])
devolver_cuadrados(["Hola", 4, kaka])
devolver_cuadrados([1, [2, 5, 9], 7])
devolver_cuadrados([2, 4, 8, 10])

//Función que dado un array devuelva el número más alto y el más bajo del mismo
const array_min_max = (array = undefined) => {
    if (array === undefined) return console.warn(`No ingresaste un arreglo de números.`);
    if (!(array instanceof Array)) return console.error(`El valor que ingresaste no es un arreglo.`);
    if (array.length === 0) return console.error(`El arreglo está vacío.`);
    for (let num of array) {
        if (typeof num !== "number") return console.error(`El valor ${num} ingresado NO es un número.`)
    }
    return console.info(`Arreglo original: ${array}\nValor mayor: ${Math.max(...array)}\nValor menor: ${Math.min(...array)}`)
}

array_min_max()
array_min_max(true)
array_min_max([])
array_min_max([1, "Hola"])
array_min_max([1, 2, [1, 2, 3]])
array_min_max([3, -56, 20, -1, 0, 99])

//Función que dado un array de números devuelva un objeto con dos arreglos que se dividan los números pares e impares
const separador = (arrray) = (arrray = undefined) => {
    if (arrray === undefined) return console.warn(`No ingresaste un arreglo de números.`);
    if (!(arrray instanceof Array)) return console.error(`El valor que ingresaste no es un arreglo.`);
    if (arrray.length === 0) return console.error(`El arreglo está vacío.`);
    for (let num of arrray) {
        if (typeof num !== "number") return console.error(`El valor ${num} ingresado NO es un número.`)
    }
    return console.info({
        pares: arrray.filter(num => num % 2 === 0),
        impares: arrray.filter(num => num % 2 === 1)
    })
}

separador()
separador(7)
separador({})
separador([])
separador([1, "Hola"])
separador([1, 2, []])
separador([1, 56, 89, 40, 74, 2])