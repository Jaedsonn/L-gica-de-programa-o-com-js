 const prompt = require("prompt-sync")() 
const fruta = prompt("Fruta: ")
const num = Number(prompt("Número: "))

for(let i = 1; i <= num; i++){
   console.log( `${fruta}*`)  
}

