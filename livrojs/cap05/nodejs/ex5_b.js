const prompt = require("prompt-sync")()
const nChinchila = Number(prompt("N° chinchila: "))
const anos = Number(prompt("N° anos: "))

let result = nChinchila

for (let i = 1; i <= anos; i++) {
    console.log(`${i}° Ano: ${result} Chinchihlas`)
    result *= 3
}