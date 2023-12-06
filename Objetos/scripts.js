//Declarando un objeto
let person = {
    name: "John",
    age: 31,
    favColor: "green",
    height: 183
   };

//Los dos métodos de acceso a las propiedades del objeto...
let x = person.age;
let y = person['age'];

console.log(x);
console.log(y);

//Definiendo un tipo de objeto para poder inicializarlos luego más fácilmente
function people(name, age, color) {
    this.name = name;
    this.age = age;
    this.favColor = color;
}

//Inicializamos objetos tipo "people"
let p1 = new people("John", 42, "green");
let p2 = new people("Amy", 21, "red");

//Llamamos a las propiedades de los objetos
console.log(p1.age); // Outputs 42
console.log(p2.name); // Outputs "Amy"

//Inicializador literal
let John = {
    name: "John",
    age: 25
};
console.log(John)
let James = {
    name: "James",
    age: 21
};
console.log(James)

//Creando métodos
//método = function() {código}
//Creando un método que permite cambiar el nombre
function persona(name, age) {
    this.name = name;
    this.age = age;
    this.changeName = function (name) {
        this.name = name;
    }
}

let p3 = new persona("David", 21);
console.log(p3)
console.log(p3.name)

//Para llamar al método de un objeto ponemos: nombreDelObjeto.método()
p3.changeName("John");
console.log(p3.name);//Ahora p3 es "John", no "David"

//Definiendo el método por fuera de la función.
function birthday(name, age) {
    this.name= name;
    this.age = age;
    this.yearOfBirth = bornYear;
}
function bornYear() {
    return 2023 - this.age;//Le decimos que guarde el valor retornado de la función
}

//Guardamos el valor en una nueva variable
let birth1 = new birthday("Aurelio", 26);

//Imprimimos el valor retornado del método "bornYear"(definido por fuera de la función "birthday")
console.log(birth1.yearOfBirth());

//Objeto Math
let number = Math.sqrt(4);
console.log(number);

//Objeto Date
let d = new Date(); //d stores the current date and time

//Fri Jan 02 1970 00:00:00
let d1 = new Date(86400000);

//Fri Jan 02 2015 10:42:00
let d2 = new Date("January 2, 2015 10:42:00");

//Sat Jun 11 1988 11:42:00
let d3 = new Date(88,5,11,11,42,0,0);