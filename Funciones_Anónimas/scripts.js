(function(){
    console.log("Mi primera IIFE")
})();

(function(d, w, c){
    console.log("Mi segunda IIFE")
    console.log(d)
    console.log(w)
    console.log(c)
    c.log("Esto es un console.log")
})(document, window, console);

//Formas de escribir funciones anónimas

//Clásica
(function () {
    console.log("Versión Clásica")
})();

//La Crockford (JavaScript The Good Parts)
((function () {
    console.log("Versión Crockford")
})());

//Unaria
+function () {
    console.log("Versión Unaria")
}();

//Facebook
!function () {
    console.log("Versión Facebook")
}();