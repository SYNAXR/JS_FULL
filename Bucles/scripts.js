console.log(`For.`)
//For...
for (let i = 0; i < 6; i++) {
    console.log(i);
}

console.log(`A continuación el while.`)
//While...
let numero = 0
while (numero < 6) {
    numero++;
    console.log(numero)
}

console.log(`Ahora vamos con el do...while.`)

//Do... while...
let do_t = 0
do {
    do_t++;
    console.log(do_t)
}
while (do_t < 0)//Nota que no se cumple el while, pero igual lo hizo(`do...`)

console.log(`Ahora vamos con el break.`)
//La sentencia break...
let kallus = 0;
while (kallus < 10) {
    kallus++;
    if (kallus == 7) {
        break;
    }
    console.log(kallus);
}
console.log(`Ahora vamos con el continue.`)
//La sentencia continue...
let pryce = 0;
while (pryce < 10) {
    pryce++;
    if (pryce == 8) {
        continue;
    }
    console.log(pryce);
}

console.log(`Ahora el for in y el for off`)
//For in y for off
let animales = [`perro`, `gato`, `tiranosaurio rex`]

for (let animal in animales) {
    console.log(animales[animal])
};

for (animal of animales) {
    console.log(animal)
}

console.log(`Ahora el label`)
//Ahora el label
let nombres = [`Shane`, `Alex`, `George`];
let warning = [`Daniela`, `Alejandra`, nombres];

forCouples:
for (let array in warning) {
    if (array == 2) {
        for (let array of nombres) {
            if (array == `George`) {
                continue forCouples;
            }
            console.log(array)
        }
    } else {
        console.log(warning[array])
    }
}

//Más del for in y for of

let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

const jon = {
    nombre: "Jon",
    apellido: "Mircha",
    edad: 35
}

for (let propiedad in jon) {
    console.log(jon[propiedad])
}

for (let items of numeros) {
    console.log(items)
}

console.log("El continue con arrays.")
//El continue con arrays

for (let i = 0; i < numeros.length; i++) {
    if (i === 5) {
        continue;
    }
    console.log(numeros[i])
}