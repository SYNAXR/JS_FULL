console.log(this)
console.log(window)
console.log(this === window)

this.name = "Contexto Global"
console.log(this.name)

function print() {
    console.log(this.name)
}

print()

const obj = {
    name: "Contexto Objeto",
    print: function () {
        console.log(this.name)
    }
}

obj.print()

const obj2 = {
    name: "Contexto Objeto 2",
    print
}

obj2.print()

const obj3 = {
    name: "Contexto Objeto 3",
    print: () => {
        console.log(this.name);
    }
}

obj3.print()

function Persona(name) {
    this.name = name;
    //return console.log(this.name);
    /* return function () {
        console.log(this.name);
    } */
    return () => console.log(this.name)
}

let jon = new Persona("Jon")
jon()