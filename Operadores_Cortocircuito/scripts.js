/* Cortocircuito AND - Cuando el valor de la izquierda de la expresión
siempre pueda validar a false, es el valor que cargará por defecto */

/* Cortocircuito OR - Cuando el valor de la izquierda en la expresión
siemore pueda validar a true, es el valor que cargará por defecto */

function saludar (nombre) {
    nombre = nombre || "Desconocido"
    console.log(`Hola, ${nombre}`)
}

saludar("Shane")
saludar()

console.log("String" || "Valor de la derecha")
console.log("" || "Valor de la derecha")
console.log(true || "Valor de la derecha")
console.log(false || "Valor de la derecha")
console.log(1 || "Valor de la derecha")
console.log(0 || "Valor de la derecha")

console.log("Ahora el AND")

console.log("String" && "Valor de la derecha")
console.log("" && "Valor de la derecha")
console.log(true && "Valor de la derecha")
console.log(false && "Valor de la derecha")
console.log(1 && "Valor de la derecha")
console.log(0 && "Valor de la derecha")