prompt = require("prompt-sync")()
const valor = Number(prompt("Valor Total da Compra: "))
const aux = Math.floor(valor / 20)
/* let parcelas
if(aux == 0){
    parcelas = 1
} else if(aux > 6){
    parcelas = 6
} else {
    parcelas = aux
} */
const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux
const valorParcela = valor / parcelas  
console.log(` Pode pagar em ${parcelas}x de R$: ${valorParcela.toFixed(2)}`)