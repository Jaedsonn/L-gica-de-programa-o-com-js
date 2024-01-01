const prompt = require("prompt-sync")()
const saques = []
let valor
let situacao = ""
do{
    valor = Number(prompt("Valor: "))
    if(valor % 10 == 0 ){
        situacao = "Válido"
        console.log(situacao + "\n" + "-".repeat(40))
    } else{
        situacao = "Inválido"
        console.log(situacao + "\n" + "-".repeat(40))
    }
    saques.push({valor, situacao})
} while(valor !== 0)
saques.pop()

const validos = saques.filter(valeu => valeu.situacao == "Válido")
const invalidos = saques.filter ( nvaleu => nvaleu.situacao == "Inválido")

const sumValidos = validos.reduce((aux,valor) => aux + valor.valor)
const sumInvalidos = invalidos.reduce((aux, valor)=> aux + valor.valor)

console.log(sumValidos)
/* console.log(validos)
console.log(invalidos) */