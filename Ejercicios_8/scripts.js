//Función que dado un [] de #, devuelva un {} con dos [], uno con los # de forma ascendente y el otro descendente
const ordenarArreglo = (array = undefined) => {
    if (array === undefined) return console.warn(`No ingresaste un arreglo de números.`);
    if (!(array instanceof Array)) return console.error(`El valor que ingresaste no es un arreglo.`);
    if (array.length === 0) return console.error(`El arreglo está vacío.`);
    for (let num of array) {
        if (typeof num !== "number") return console.error(`El valor ${num} ingresado NO es un número.`)
    }
    return console.info({
        array,
        asc: array.map(el => el).sort(),
        desc: array.map(el => el).sort().reverse()
    })
}

ordenarArreglo()
ordenarArreglo([])
ordenarArreglo("Hola")
ordenarArreglo({})
ordenarArreglo([1, 3, 5, 7, [5, 6, 6]])
ordenarArreglo([1, 5, 9, "Hola"])
ordenarArreglo([7, 5, 6, 7, 8])

//Función que dado un arreglo de elementos elimine los duplicados
const removerDuplicados = (array = undefined) => {
    if (array === undefined) return console.warn(`No ingresaste un arreglo de números.`);
    if (!(array instanceof Array)) return console.error(`El valor que ingresaste no es un arreglo.`);
    if (array.length === 0) return console.error(`El arreglo está vacío.`);
    if (array.length === 1) return console.error(`El arreglo debe tener al menos dos elementos.`);
    for (let num of array) {
        if (typeof num !== "number") return console.error(`El valor "${num}" ingresado NO es un número.`);
    }
    /* return console.info({
        original: array,
        sinDuplicados: array.filter((value, index, self) => self.indexOf(value) === index)
    }) */
    return console.info({
        original: array,
        sinDuplicados: [...new Set(array)]
    })
}

let arreglo = [1, 1, 2, 2, 3, 4, 4, 5, 6]

removerDuplicados()
removerDuplicados([])
removerDuplicados("Hola")
removerDuplicados(["Hola", 1])
removerDuplicados([2, 3, 5, 5, []])
removerDuplicados(arreglo)

//Función que dado un arreglo de números obtenga un promedio
const promedio = (array = undefined) => {
    if (array === undefined) return console.warn(`No ingresaste un arreglo de números.`);
    if (!(array instanceof Array)) return console.error(`El valor que ingresaste no es un arreglo.`);
    if (array.length === 0) return console.error(`El arreglo está vacío.`);
    for (let num of array) {
        if (typeof num !== "number") return console.error(`El valor "${num}" ingresado NO es un número.`);
    }
    return console.info(
        array.reduce((total, num, index, array) => {
            total += num;
            if (index === array.length-1) {
                return `El promedio de ${array.join(" + ")} es igual a ${total/array.length}.`
            }
            else {
                return total;
            }
        })
    )
}

promedio()
promedio("kaka")
promedio(1)
promedio([])
promedio([1, 5, 1, 6, 1, []])
promedio([1, 5, 8, 9, 6, 7])