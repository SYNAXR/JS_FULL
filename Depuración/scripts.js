try {
    let numero = "y";
    if (isNaN(numero)) {
        throw new Error("El caracter introducido no es número");
    }
    console.log(numero * numero)
} catch(error){
    console.log(`Se produjo el siguiente error: ${error}`);
}