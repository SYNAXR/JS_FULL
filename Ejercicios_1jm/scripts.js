/* function count_charts(string = "") {
    if(!string){
        console.warn("No ingresaste ningún string")
    }
    else {
        console.info(`El string "${string}" tiene ${string.length} caracteres`)
    }
}

count_charts()
count_charts("Hola Mundo") */

const count_charts = (string = "") => 
(!string) 
    ? console.warn("No ingresaste ningún string")
    : console.info(`El string "${string}" tiene ${string.length} caracteres`);

count_charts()
count_charts("Hola Mundo")

//Función de cortar texto
const cortar_texto = (text = "", length = undefined) => 
(!text) 
    ? console.warn("No ingresaste texto")
    : (length === undefined) 
    ? console.warn("No ingresaste la longitud para recortar el texto")
    : console.info(text.slice(0, length))

cortar_texto()
cortar_texto("Hola Mundo")
cortar_texto("", 5)
cortar_texto("Hola Mundo", 4)

//Función que devuelva un array por una cadena de texto dada
const stringToArray = (cadena = "", separador = undefined) => 
(!cadena)
    ? console.warn("No ingresaste la longitud para recortar el texto")
    : (separador === undefined)
    ? console.warn("No ingresaste el caracter separador")
    : console.info(cadena.split(separador));

    stringToArray("Lorem ipsum kaka", " ")

//Función que repita texto
const repetir_texto = (texto = "", veces = undefined) => {
    if (!texto) return console.warn("No ingresaste un texto.");
    if (veces === undefined) return console.warn("No ingresaste el número de veces a repetir el texto.");
    if (veces === 0) return console.error("El número de veces no puede ser 0.");
    if (Math.sign(veces) === -1) return console.error("El número de veces no puede ser negativo.");
    if (isNaN(veces)) return console.error("El número de veces no puede ser un texto.");
    for (let i = 1; i <= veces; i++) console.info(`${texto}, ${i}`);
}

repetir_texto("Hola Mundo", 3)
repetir_texto("Hola Mundo", 0)
repetir_texto("Hola Mundo", -20)
repetir_texto("Hola Mundo", "kaka")
repetir_texto("", 20)
repetir_texto("Hola Mundo")