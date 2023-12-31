//Función que invierta una cadena de texto
const inverter = (string = "") =>
    (!string)
        ? console.warn("No ingresaste texto.")
        : console.info(string.split("").reverse().join(""));

inverter()
inverter("Hola Mundo")

//Función que cuenta la cantidad de veces que se repite una palabra en un texto.
const contadorDePalabras = (cadena = "", texto = "") => {
    if (!cadena) return console.warn("No ingresaste texto largo.")
    if (!texto) return console.warn("No ingresaste una palabra de búsqueda.")
    let i = 0
    let contador = 0
    while (i !== -1) {
        i = cadena.indexOf(texto, i);
        if (i !== -1){
            i++;
            contador++;
        }
    }
    return console.info(`La palabra ${texto} se repite ${contador} veces.`)
}

contadorDePalabras()
contadorDePalabras("", "mundo")
contadorDePalabras("Hola mundo, adiós mundo")
contadorDePalabras("Hola mundo, adiós mundo", "mundo")

//Función que comprueba si una palabra es palíndromo
const palindromo = (palabra = "") => {
    if (!palabra) return console.warn("No ingresaste una palabra o frase.");
    palabra = palabra.toLocaleLowerCase();
    let alReves = palabra.split("").reverse().join("");
    return(palabra === alReves)
    ? console.info(`Sí es palíndromo. Palabra original "${palabra}", palabra al revés "${alReves}"`)
    : console.info(`No es palíndromo. Palabra original "${palabra}", palabra al revés "${alReves}"`);
}

palindromo()
palindromo("Hola Mundo")
palindromo("Salas")
palindromo("Aziza")

//Función que elimina patrones de caracteres
const wipe = (parrafo = "", patron = "") =>
    (!parrafo)
        ? console.warn("No ingresaste texto.")
        : (!patron)
            ? console.warn("No ingresaste un patrón.")
            : console.info(parrafo.replace(new RegExp(patron, "ig"), ""))

wipe()
wipe("xyz1, xyz2, xyz3, xyz4, xyz5")
wipe("xyz1, xyz2, xyz3, xyz4, xyz5", "xyz")