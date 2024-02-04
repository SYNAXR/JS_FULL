const person = {
    name: "",
    lastname: "",
    age: 0,
}

const handler = {
    set(obj, property, value) {
        if (Object.keys(obj).indexOf(property) === -1) {
            return console.error(`La propiedad ${property} no existe en el objeto "Person".`);
        }
        if (
            (property === "name" || property === "lastname") && !(/^[A-Za-z\s]+$/g.test(value))
        ) {
            return console.error(`La propiedad ${property} solo acepta letras y espacios en blanco.`)
        }
        obj[property] = value;
    }
}

const jon = new Proxy(person, handler);
jon.name = "Jon"
jon.lastname = "Mircha";
jon.age = 35;
jon.twitter = "@jon.mircha"

console.log(jon)
console.log(person)