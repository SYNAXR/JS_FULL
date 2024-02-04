let id = Symbol("hola");
let id2 = Symbol("hola");

console.log(id === id2)
console.log(id, id2)
console.log(typeof id, typeof id2)

const NAME = Symbol("NAME");
const HELLO = Symbol("HELLO");

const person = {
    [NAME]: "Jon",
    age: 35
}

console.log(person)

person.NAME = "Jon Mircha"

console.log(person)
console.log(person.NAME)
console.log(person[NAME])

person[HELLO] = function () {
    console.log(`Hello!`);
}

console.log(person)

person[HELLO]();

for (let property in person) {
    console.log(property);
    console.log(person[property]);
}

console.log(Object.getOwnPropertySymbols(person))