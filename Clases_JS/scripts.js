class Animal {
    /*El constructor es un método especial que se ejecuta...
     en el momento de instanciar la clase*/
    constructor(nombre, género){
        this.nombre = nombre;
        this.género = género;
    }
    //Métodos
    sonar(){
        console.log("Hago sonidos porque estoy vivo.");
    }

    saludar(){
        console.log(`Hola, me llamo ${this.nombre}`);
    }
}

//Herencia
class Perro extends Animal {
    constructor(nombre, género, tamanio) {
        //Super manda a llamar al constructor de la clase padre
        super(nombre, género);
        this.tamanio = tamanio;
        this.raza = null;
    }

    sonar() {
        console.log("Soy un perro y mi sonido es un ladrido")
    }

    ladrar() {
        console.log("Waff! Waff!")
    }

    static queEres() {
        console.log("El perro es el mejor amigo del hombre.")
    }

    get getRaza() {
        return this.raza;
    }

    set setRaza(raza) {
        this.raza = raza;
    }
}

const mimi = new Animal("Mimi", "Hembra")
const scooby = new Perro("Scooby", "Macho", "Gigante")

console.log(mimi)
mimi.saludar()
mimi.sonar()
console.log(scooby)
scooby.saludar()
scooby.sonar()
scooby.ladrar()
Perro.queEres()
scooby.setRaza = "Gran Danés"
console.log(scooby.getRaza)