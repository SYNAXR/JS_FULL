//Código Síncrono Bloqueante
(() => {
    console.log(`Código Síncrono`);
    console.log(`Inicio`);
    
    function dos() {
        console.log("Dos")
    }

    function uno() {
        console.log("Uno");
        dos();
        console.log("Tres");
    }

    uno();
    console.log("Fin")
})();

console.log(`*********************`);

//Código Asíncrono No Bloqueante
(() => {
    console.log(`Código Asíncrono`);
    console.log(`Inicio`);
    
    function dos() {
        setTimeout(function() {
            console.log("Dos");
        }, 1000)
    }

    function uno() {
        setTimeout(function() {
            console.log("Uno");
        }, 0);
        dos();
        console.log("Tres")
    }

    uno();
    console.log("Fin")
})();