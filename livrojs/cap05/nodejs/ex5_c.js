const prompt = require("prompt-sync")()
const num = Number(prompt("Número: "))

let soma = 0
let result

for (let i = 2; i <= num && num % i == 0; i++) {
    let divisao = num / i
    console.log(divisao)
   /*  if (num % i == 0) {
        soma += divisao
        result = "N°" + divisao
        console.log(divisao)
    } */

}


