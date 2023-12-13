//POO
/*
Clases - Modelo a seguir.
Objetos - Es una instancia de una clase.
-Atributos - Es una característica o propiedad del objeto(variables dentro de el)
-Métodos - Acciones que un objeto puede realizar(funciones )
*/

const animal = {
    nombre: "Snoopy", 
    sonar() {
        console.log("Hago sonidos porque estoy vivo")
    }
}

const animal2 = {
    nombre: "Lola Bunny", 
    sonar() {
        console.log("Hago sonidos porque estoy vivo")
    }
}

console.log(animal)
console.log(animal2)

//Función constructora
function Animal(nombre, género) {
    //Atributos
    this.nombre = nombre;
    this.género = género
}

//Métodos agregados por fuera de la función constructora
Animal.prototype.sonar = function() {
    console.log("Hago sonidos porque estoy vivo")
}

const snoopy = new Animal("Snoopy", "Macho")
const lolaBunny = new Animal("Lola Bunny", "Hembra")

console.log(snoopy)
console.log(lolaBunny)

snoopy.sonar()
lolaBunny.sonar()
