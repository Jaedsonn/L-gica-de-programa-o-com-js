const prompt = require("prompt-sync")()
let nChinchila = Number(prompt("N° chinchila"))
const anos = Number(prompt("N° anos"))

let crescimento = 3
 let chinchila = crescimento * nChinchila 


for (let i = 1; i <= anos; i++) {

    let result = chinchila
    crescimento += crescimento
    result = chinchila * crescimento


    console.log(result)
}  