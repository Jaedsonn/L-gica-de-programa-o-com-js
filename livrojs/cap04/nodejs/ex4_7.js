const prompt = require("prompt-sync")() // adiciona pacote prompt-sync
const pessoas = Number(prompt("Nº Pessoas: ")) // lê dados de entrada
const peixes = Number(prompt("Nº Peixes: "))
let pagar // declara variável pagar
if (peixes <= pessoas) {     // condição definida no exemplo
  pagar = pessoas * 20
} else {
  pagar = pessoas * 20 + (peixes - pessoas) * 12
}
console.log(`Pagar R$: ${pagar.toFixed(2)}`) // exibe o valor a ser pago

/* MEU CÓDIGO PARA O EXEMPLO CITADO
const prompt = require("prompt-sync")()
const pessoas = Number(prompt("Número de pessoas: "))
const peixes = Number(prompt("Número de peixes: "))
let valorTotal
  if(pessoas == peixes){
    valorTotal = pessoas * 20
  } else if(pessoas < peixes){
    valorTotal = (pessoas * 20) + ((peixes - pessoas)*12)
  } else {
    valorTotal = pessoas * 20
  }
  console.log(`O valor total ficou ${valorTotal.toFixed(2)}`) 
  */