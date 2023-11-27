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