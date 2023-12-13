const prompt = require("prompt-sync")()
console.log("Programa etiqueta")
console.log("---------------------------------------------------")
const nomeProduto = prompt("Nome do produto: ")
const etiquetas = Number(prompt("Número de etiquetas"))

for(let i = 1; i <= etiquetas / 2; i++){
    console.log(`${nomeProduto.padEnd(30, "#")} ${nomeProduto}`)
}

if(etiquetas % 2 == 1){
    console.log(nomeProduto)
}