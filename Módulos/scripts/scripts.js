import {saludar, Saludar, PI, user, password} from "../scripts/consts.js";
import {aritmethics as arth} from "../scripts/aritmethics.js"

console.log("Esto es un archivo módulo.")
console.log(PI, user, password)
console.log(arth)
console.log(arth.sumar(3, 4))
console.log(arth.restar(3, 4))

saludar()

let saludo = new Saludar();