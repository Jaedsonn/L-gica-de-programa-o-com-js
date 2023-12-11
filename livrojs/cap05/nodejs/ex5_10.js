const prompt = require("prompt-sync")()
const valor = Number(prompt("Valor: "))
const parcelas = Number(prompt("N° parcelas: "))

const valorParcelas = Math.floor(valor/parcelas)
const valorFinal = valorParcelas + (valor%parcelas)

for(let i = 1; i < parcelas; i++){
    console.log(`${i} parcela: R${valorParcelas.toFixed(2)}`)
}
console.log(`${parcelas} parcela: R$ ${valorFinal.toFixed(2)}`)