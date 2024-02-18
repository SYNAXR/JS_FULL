console.log(window)
console.log(document)

let texto = "Hola, soy tu amigo y docente digital, Jonathan Mircha."

const spoke = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto))

//spoke(texto)