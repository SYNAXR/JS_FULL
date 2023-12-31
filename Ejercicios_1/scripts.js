//Función que devuelve la longitud de una entrada
function count_size(i) {
    console.log(i.length)
}

count_size("Hola Mundo")
count_size("1997")

const numbers = [1, 2, 3, 4, 5]
count_size(numbers)

/*
let input_user = prompt()

function count_size() {
    alert(input_user.length)
}

count_size()
*/

//Función que corta texto
/* function cortarTexto(texto, longitud) {
    // Comprobamos que la longitud sea un número positivo
    if (isNaN(longitud) || longitud < 0) {
      return null;
    }
    // Obtenemos los caracteres del inicio a la longitud
    return texto.substr(0, longitud);
}

let texto = "Hola Mundo";
let trozo = cortarTexto(texto, 4);

console.log(trozo); // "Hola"
console.log(cortarTexto("Aurelio Crespo", 7)) */

function cortarTexto(texto, longitud) {
    // Comprobamos que la longitud sea un número positivo
    if (isNaN(longitud) || longitud < 0) {
      return null;
    }
    // Obtenemos los caracteres del inicio a la longitud
    console.log(texto.substr(0, longitud));
}

cortarTexto("Hola Mundo", 4)

//Función que convierte una cadena de texto en un array
function separarTexto(text, split) {
    return text.split(split);
}
  
let texto_separado = separarTexto("Hola, qué tal", " ")
console.log(texto_separado)

//Función que repite texto
/* function repetirTexto(textToRepeat, times) {
    // Comprobamos que el número de times sea un número positivo
    if (isNaN(times) || times < 1) {
      return null;
    }
    // Devolvemos la cadena repetida
    return textToRepeat.repeat(times);
}

let textoRepetido = console.log(repetirTexto("Hola Mundo. ", 3)) */

function repetirTexto(textToRepeat, times) {
    // Comprobamos que el número de times sea un número positivo
    if (isNaN(times) || times < 1) {
      return null;
    }
    // Devolvemos la cadena repetida
    console.log(textToRepeat.repeat(times));
}

repetirTexto("Hola Mundo. ", 3)