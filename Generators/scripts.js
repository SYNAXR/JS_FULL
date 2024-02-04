function* i() {
    yield "Hola";
    console.log("Hola Consola");
    yield "Hola 2";
    console.log("Continúan las instrucciones de código");
    yield "Hola 3";
    yield "Hola 4";
}

let it = i()

/* console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next()) */

for (let y of it) {
    console.log(y);
}

const arr = [...i()]
console.log(arr)

function square(value) {
    setTimeout(() => {
        return console.log({ value, result: value * value })
    }, Math.random() * 1000);
}

function* generator() {
    console.log(`Inicia Generator`);
    yield square(0)
    yield square(1)
    yield square(2)
    yield square(3)
    yield square(4)
    yield square(5)
    console.log(`Termina Generator`);
}

let gen = generator()

for (let y of gen) {
    console.log(y)
}