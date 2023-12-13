function Animal(nombre, género) {
    //Atributos
    this.nombre = nombre;
    this.género = género
}

//Herencia Prototípica
function Perro(nombre, género, tamanio) {
    this.super = Animal;
    this.super(nombre, género);
    this.tamanio = tamanio;
}

//Perro está heredando de Animal
Perro.prototype = new Animal()
Perro.prototype.constructor = Perro
//Sobreescribiendo el método del prototipo padre en el hijo
Perro.prototype.sonar = function() {
    console.log("Ladrido")
}

Perro.prototype.ladrar = function() {
    console.log("Waff! Waff!")
}

//Métodos agregados por fuera de la función constructora
Animal.prototype.sonar = function() {
    console.log("Hago sonidos porque estoy vivo")
}

const snoopy = new Perro("Snoopy", "Macho", "Mediano")
const lolaBunny = new Animal("Lola Bunny", "Hembra")

console.log(snoopy)
console.log(lolaBunny)
