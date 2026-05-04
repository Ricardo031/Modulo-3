// const prompt = require("prompt-sync")(); // para poder escribir en terminal

let name = prompt("Enter your Name: ")
let years = parseInt(prompt("Enter your year: "))
const gender = "Male"
let pretty = true

//detect if years is a number
while (isNaN(years)) {

    console.log("Error: please Enter a valid year");
    console.log("----------------------------")
    years = parseInt(prompt("Enter a valid year: "))

}

if (years < 18) {
    console.log("-------------OK--------------");
    console.info(`Hello ${name}, you're a minor. keep learning and enjoy the coddi`);
    console.log(name, years, gender, pretty);
} else {
    console.log("-------------OK--------------");
    console.log(`Hello ${name}, you're of legal age. Get ready for great opportunities in the world of programming!`);
    console.log(name, years, gender, pretty);
}

// let mensaje = (years <= 18) ? `Hello ${name}, you're a minor. keep learning and enjoy the coddi \n${name} ${years} ${gender} ${pretty}` : `Hello ${name}, you're of legal age. Get ready for great opportunities in the world of programming! \n${name} ${years} ${gender} ${pretty}`

console.log(mensaje);









