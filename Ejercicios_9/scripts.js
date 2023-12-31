/*
Programa una clase llamada Film.
La clase recibirá un objeto al momento de instanciarse con los siguientes datos:
► id de la película en IMDB
► título
► director
► año de estreno
► país o paises de origen
► géneros
► calificación de IMDB
//Valida que el id tenga 9 caracteres(los 2 primeros, letras, el resto números)
//Todos los daros del objeto son obligatorios.
//Valida que el título no rebase los 100 caracateres.
//Valida que el nombre del director no rebase los 50 caracteres.
//Valida que el año de estreno sea un número entero de 4 dígitos.
//Valida que el país o paises sean introducidos en forma de arreglo.
//Valida que el género o géneros sean introducidos en forma de arreglo.
//Valida que los géneros introducidos estén dentro de "géneros aceptados".
//Crea un método estático que devuelva los géneros aceptados.
//Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
//Crea un método que devuelva la ficha técnica de la película.
//A partir de un arreglo con la información de 3 películas:
► Genera 3 instancias de la clase de forma automatizada.
► Imprime la ficha técnica de cada una.

*Géneros aceptados:
Action Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary, Drama, 
Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mistery, News, 
Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/

class Film {
    constructor(id, title, director, year, country, genre, rating) {
        this.id = id;
        this.title = title;
        this.director = director;
        this.year = year;
        this.country = country;
        this.genre = genre;
        this.rating = rating;
        this.check_id(id);
    }
    //
    check_string (property, value) {
        if (!value) return console.warn(`${property} "${value}" it’s empty.`);
        if (typeof value !== "string") return console.error(`The ${property} "${value}" entered is NOT a string.`);
        return true;
    }
    //Valida que el id tenga 9 caracteres(los 2 primeros, letras, el resto números)
    check_id (id) {
        if (this.check_string("id", id)) {
            if (!(/^([a-z]){2}([0-9]){7}$/.test(id))) return console.error(`IMDB id "${id}" is NOT valid.`)
        }
    }
}

const peli = new Film({
    id: "Hola"
})