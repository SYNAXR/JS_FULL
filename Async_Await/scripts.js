function cuadradoPromise(value) {
    if (typeof value !== "number") {
        return Promise.reject(`Error, el valor ${value} no es un número.`);
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value,
                result: value * value
            });
        }, 0 | Math.random() * 1000);
    });
}

AsyncFunctionDeclared()

async function AsyncFunctionDeclared() {
    try {
        console.log(`Inicio de Función Asíncrona.`);
        let obj = await cuadradoPromise(0);
        //"await" hace que el código espere obtener los datos antes de seguir
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
        obj = await cuadradoPromise(1);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
    }
    catch (err) {
        console.error(err)
    }
}

const AsyncFunctionExpresed = async () => {
    try {
        console.log(`Inicio de Función Asíncrona.`);
        let obj = await cuadradoPromise(0);
        //"await" hace que el código espere obtener los datos antes de seguir
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
        obj = await cuadradoPromise(1);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
    }
    catch (err) {
        console.error(err)
    }
}

AsyncFunctionExpresed()