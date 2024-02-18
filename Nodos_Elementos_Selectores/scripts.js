/* console.log(document.getElementsByTagName("li"))
console.log(document.getElementsByClassName("card"))
console.log(document.getElementsByName("nombre")) */
/* console.log(document.getElementById("menu"))
console.log(document.querySelector("#menu"))
console.log(document.querySelector("a"))
console.log(document.querySelectorAll("a"))
console.log(document.querySelectorAll("a").length)

document.querySelectorAll("a").forEach(el => console.log(el))

console.log(document.querySelector(".card"))
console.log(document.querySelectorAll(".card"))
console.log(document.querySelectorAll(".card")[2])
console.log(document.querySelectorAll("#menu li")) */

//Atributos

/* console.log(document.documentElement.lang) //<html lang="en">
console.log(document.documentElement.getAttribute("lang")) //lang="en"
console.log(document.querySelector(".link-dom").href) //http://127.0.0.1:5500/Nodos_Elementos_Selectores/index.html
console.log(document.querySelector(".link-dom").getAttribute("href")) //index.html

document.documentElement.lang = "es";
console.log(document.documentElement.lang)
document.documentElement.setAttribute("lang", "es-MX")
console.log(document.documentElement.lang)

const $linkDOM = document.querySelector(".link-dom")

$linkDOM.setAttribute("target", "_blank")
$linkDOM.setAttribute("rel", "noopener")
$linkDOM.setAttribute("href", "https://youtube.com/jonmircha")

console.log($linkDOM.hasAttribute("rel")) //true
$linkDOM.removeAttribute("rel")
console.log($linkDOM.hasAttribute("rel")) //false

//Data-Atributes
console.log($linkDOM.getAttribute("data-description"))
console.log($linkDOM.dataset) //DOMStringMap
console.log($linkDOM.dataset.description) //Document Object Model(this case)
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento")
console.log($linkDOM.dataset.description) //Modelo de Objeto del Documento(this case)
$linkDOM.dataset.description = "Suscríbete!"
console.log($linkDOM.hasAttribute("data-id"))
$linkDOM.removeAttribute("data-id")
console.log($linkDOM.hasAttribute("data-id")) */

//Estilos y Variables CSS

const $linkDOM = document.querySelector(".link-dom")

console.log($linkDOM)
console.log(getComputedStyle($linkDOM).getPropertyValue("color"))