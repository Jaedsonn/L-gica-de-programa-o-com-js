const prompt = require("prompt-sync")()
const peso = Number(prompt("Peso da ração em Kg: "))
const consumo = Number(prompt("Consumo por dia em granas: "))
const pesoG = peso*1000
const dias = Math.floor(pesoG / consumo)
const resto = Math.abs((dias * consumo) - pesoG) 
console.log(`a ração irá durar: ${dias}`)
console.log(`o resto foi : ${resto}`)













/* const dias = Math.floor((racao*1000) / consumo)
console.log(`A ração irá durar ${dias.toFixed(2)}`)  */