//Funciones
//Declarar una función
function hi(){
    answer = prompt(`Hi, James, how are you?`)
    if (answer == `Fine`) {
        alert(`Cool!`)
    }
    else {
        alert(`Oh, what a shame!`)
    }
}
/*
//Llamamos a la función...
hi()
*/

//Vamos a pasar parámetros a las funciones
function saludar (name, age) {
    console.log(`Hi, ${name}, I know you are ${age} years old.`);

    //Abajo declaramos el return que debe darnos la función...
    return "You have been spotted";
}

//Aquí recibimos de vuelta el valor del return
let returned_value = saludar(`Aurelio`, 26)
console.log(returned_value)

//Función para calcular el siglo según el año dado
function get_century() {
    let year = 1501;
    console.log(calcCent(year));
}

function calcCent(year){
    return Math.ceil(year / 100);
}
get_century()

//Imprimir la hora continuamente
function printTime() {
    let d = new Date();
    let hours = d.getHours();
    let mins = d.getMinutes();
    let secs = d.getSeconds();
    document.body.innerHTML = hours+":"+mins+":"+secs;
}
setInterval(printTime, 1000);

//Función que imprime el nombre del dia de la fecha dada
function getWeekDay(year, month, day) {
    let names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let fecha = new Date(year, month, day);
    let weekday = names[fecha.getDay()];
    return weekday;
}

console.log(getWeekDay(97, 6, 7));

let today = new Date()
console.log(today);//

//Función que incrementa el precio de los elementos de un array
function increase_price() {
    let increase = 1;
    let prices = [98.99, 15.2, 20, 1026, 0];
  
    for (let i = 0; i < prices.length; i++) {
      prices[i] += increase;
    }
    console.log(prices);
  }

increase_price()

console.log("Parámetros REST y Operador Spread")
//Parámetros REST
function sumar(a, b, ...c) {
    let resultado = a + b;

c.forEach(function(n){
    resultado += n
});
return resultado;
}

console.log(sumar(1, 2))
console.log(sumar(1, 2, 3))
console.log(sumar(1, 2, 3, 4))

//Operador Spread
const arr1 = [1, 2, 3, 4, 5]
const arr2 = [6, 7, 8, 9, 0]

console.log(arr1, arr2)

const arr3 = [...arr1, ...arr2]
console.log(arr3)