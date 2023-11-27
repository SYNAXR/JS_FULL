//The if statement
let purchase = 1900
if (purchase>= 1500) {
    console.log(`Discount!`)
};

//Usando dos variables en la comparación
let player = 'John';
let points = 144;
let minPoints = 100;

if(points>=minPoints){
    console.log(`Well done, ${player}!`);
}

//Un if dentro de otro if
let num = 12;

if(num > 5){
  console.log('Bigger than 5');
  if(num < 47){
    console.log('Between 5 and 47');
  }
}//Resulta en los dos mensajes saliendo en la consola

//The else statement
let score = 98;

if(score >=100){
  console.log("Level Completed!");
} else {
  console.log("Try again!");
}//Al if no ser true, pasa a ejecutar el else.

//The else if statement
let time = 21;

if (time < 10) {
  console.log("Good morning");
} else if (time < 12) {
  console.log("Good day");
} else if (time < 18) {
    console.log("Good afternoon");
} else if (time < 20) {
    console.log("Good evening");
} else {
  console.log("Good night");
}

//The switch statement
let choice = 1;

switch(choice){
  case 1://match!
    console.log("Sports");
    break;
  case 2:
    console.log("Business");
    break;
  case 3:
    console.log("Technology");
    break;
}

//Añadiendo el default
let color ="yellow";

switch(color) {
  case "blue": 
    console.log("This is blue.");
    break;
  case "red": 
    console.log("This is red.");
    break;
  default: 
    console.log("Color not found.");
}
console.log(`Prueba Lazaro Pina 2.`)