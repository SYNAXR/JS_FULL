console.log(this)
this.place = "Contexto Global"

function hello(greet, name) {
    console.log(`${greet} ${name} desde el ${this.place}`)
}

hello("Hola", "Kenai")

const obj = {
    place: "Contexto Objeto"
}

hello.call(obj, "Hola", "Jon")
hello.apply(obj, ["Adiós", "Mircha"])
hello.call(null, "Hola", "Jon")
hello.call(this, "Hola", "Jon")

this.name = "Window"

const person = {
    name: "Jon",
    greet: function () {
        console.log(`Hola ${this.name}`)
    }
}

person.greet()

const an_person = {
    greet: person.greet.bind(this)
}

an_person.greet()