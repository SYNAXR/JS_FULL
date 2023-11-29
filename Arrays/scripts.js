//Declarando arrays
const a = [];
const b = [1, true, "Hola", ["A", "B", "C"]];

//Muestra los elementos del array
console.log(a);
console.log(b);

//Solicita el conteo de los elementos del array
console.log(b.length);

//Accediendo a una posición específica del array
console.log(b[2]);
console.log(b[10]);// Muestra "undefined"

//Recorriendo un array dentro de otro array
console.log(b[3][2]);

//Métodos de declarar arreglos
const e = new Array();
console.log(e)

//Inicializandolo directamente
const f = new Array(1, 2, 3, true, false);
console.log(f);

const c = Array.of("X", "Y", "Z", 9, 8, 7);
console.log(c);

//Definiendo directamente las posiciones
let cursos = new Array(3);
cursos[0] = "HTML";
cursos[1] = "CSS";
cursos[2] = "JS";

console.log(cursos)
console.log(cursos[2]);

//Usando métodos de arrays
let c1 = ["HTML", "CSS"];
let c2 = ["JS", "C++"];
let c_full = c1.concat(c2);//Concatenar no va a afectar a los arreglos, sencillamente resulta en uno nuevo

console.log(c_full)

const colores = ["Rojo", "Verde", "Azul"];
console.log(colores);

colores.push("Negro");//Introduce un nuevo elemento al final del array
console.log(colores);

colores.pop();//Quita el último elemento
console.log(colores);

let courses = new Array("HTML", "CSS", "JS");

//Definiendo una variable con elementos de un array
let course = courses[0]; // HTML
console.log(course)

//Redefiniendo un elemnto de un array
courses[1] = "C++"; //Changes the second element
console.log(courses)

//.forEach
colores.forEach(function(el, index) {
    console.log(`<li class="${index}">${el}</li>`)
});

//Inicializar un array con valores predefinidos
const d = Array(100).fill(false);
console.log(d);