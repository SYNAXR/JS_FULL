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
//Todos los datos del objeto son obligatorios.
//Valida que el id tenga 9 caracteres(los 2 primeros, letras, el resto números)
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
Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary, Drama, 
Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mistery, News, 
Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/

class Film {
    constructor({ id, title, director, year, country, genre, rating }) {
        this.id = id;
        this.title = title;
        this.director = director;
        this.year = year;
        this.country = country;
        this.genre = genre;
        this.rating = rating;

        this.check_id(id);
        this.check_title(title);
        this.check_director(director);
        this.check_year(year);
        this.check_country(country);
        this.check_genre(genre);
        this.check_rating(rating);
    }
    //Valida que los géneros introducidos estén dentro de "géneros aceptados".
    static get genres_list() {
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama",
            "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mistery", "News",
            "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
    }
    static accepted_genres() {
        return console.info(`The accepted genres are: ${Film.genres_list.join(", ")}.`);
    }
    //Valida que el valor de una propiedad sea un string.
    check_string(property, value) {
        if (!value) return console.warn(`${property} "${value}" it’s empty.`);
        if (typeof value !== "string") return console.error(`${property} "${value}" entered is NOT a string.`);
        return true;
    }
    //Valida que el valor de la propiedad sea un número.
    check_number(property, value) {
        if (!value) return console.warn(`${property} "${value}" it’s empty.`);
        if (typeof value !== "number") return console.error(`${property} "${value}" is NOT a number.`);
        return true;
    }
    //Valida que un string tenga una longitud determinada según el valor dado.
    check_stringLength(property, value, length) {
        if (value.length > length) return console.error(`${property} "${value}" excedes the number of characters allowds(${length}).`);
        return true;
    }
    //Valida que el valor de la propiedad sea un arreglo.
    check_array(property, value) {
        if (!value) return console.warn(`${property} "${value}" it’s empty.`);
        if (!(value instanceof Array)) return console.error(`${property}, "${value}" is NOT an array.`);
        if (value.length === 0) return console.error(`${property}, "${value}" have no data.`);
        for (let string of value) {
            if (typeof string !== "string") return console.error(`The value "${string}" is NOT a string.`);
        }
        return true;
    }
    //Valida que el id tenga 9 caracteres(los 2 primeros, letras, el resto números)
    check_id(id) {
        if (this.check_string("id", id)) {
            if (!(/^([a-z]){2}([0-9]){7}$/.test(id))) return console.error(`El id "${id}" is NOT valid.`);
        }
    }
    //Valida que el título no rebase los 100 caracateres.
    check_title(title) {
        if (this.check_string("Title", title))
            this.check_stringLength("Title", title, 100);
    }
    //Valida que el nombre del director no rebase los 50 caracteres.
    check_director(director) {
        if (this.check_string("Director", director))
            this.check_stringLength("Director", director, 50);
    }
    //Valida que el año de estreno sea un número entero de 4 dígitos.
    check_year(year) {
        if (this.check_number("Year", year)) {
            if (!(/^([0-9]){4}$/.test(year))) {
                console.error(`Year "${year}" is NOT valid.`)
            }
        }
    }
    //Valida que el país o paises sean introducidos en forma de arreglo.
    check_country(country) {
        this.check_array("Country", country)
    }
    //Valida que el género o géneros sean introducidos en forma de arreglo.
    //Valida que los géneros introducidos estén dentro de "géneros aceptados".
    check_genre(genre) {
        if (this.check_array("Genres", genre)) {
            for (let i of genre) {
                if (!Film.genres_list.includes(i)) {
                    console.error(`${i} is NOT a valid genre.`);
                    Film.accepted_genres();//Manda los géneros aceptados a la consola.
                }
            }
        }
    }
    //Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
    check_rating(rating) {
        if (this.check_number("Rating", rating))
            return (rating < 0 || rating > 10)
                ? console.error(`Rating has to be between 0 and 10.`)
                : this.rating = rating.toFixed(1);
    }
    movie_info() {
        console.info(`Movie Info:\nTitle: "${this.title}"\nDirector: "${this.director}"\nYear: "${this.year}"\nCountry: "${this.country}"\nGenre: "${this.genre.join(", ")}"\nRating: "${this.rating}"\nID: "${this.id}"`)
    }
}

//Film.accepted_genres()

/* const peli = new Film({
    id: "tt1478526",
    title: "Star Wars",
    director: "George Lucas",
    year: 1977,
    country: ["USA"],
    genre: ["Sci-Fi",],
    rating: 9.1
})

peli.movie_info() */

const Favorite_Films = [
    {
        id: "tt1479836",
        title: "Star Wars",
        director: "George Lucas",
        year: 1977,
        country: ["USA"],
        genre: ["Sci-Fi",],
        rating: 9.1
    },
    {
        id: "tt1479876",
        title: "Iron Man 2",
        director: "Jon Favreau",
        year: 2010,
        country: ["USA"],
        genre: ["Sci-Fi", "Action"],
        rating: 8.65
    },
    {
        id: "tt0148526",
        title: "Your Name",
        director: "Makoto Shinkai",
        year: 2016,
        country: ["Japan"],
        genre: ["Animation", "Romance"],
        rating: 8.5
    }
]

/*A partir de un arreglo con la información de 3 películas:
    ► Genera 3 instancias de la clase de forma automatizada.
    ► Imprime la ficha técnica de cada una.*/
Favorite_Films.forEach(el => new Film(el).movie_info())