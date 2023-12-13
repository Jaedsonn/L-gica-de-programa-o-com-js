const frm = document.querySelector("form")
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")



frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const num = Number(frm.inNumero.value)
    let soma = 0
    let result 

    for (let i = 2; i <= num; i++) {
        const divisao = num / i
       

        if (num % i == 0) {
            soma += divisao
            resp1.innerHTML = ""
                resp2.innerHTML = ""
            
            if (soma == num) {
                resp1.innerHTML += divisao
                resp2.innerHTML = `${num} É um número perfeito`
            } else if(soma != num){
                resp1.innerHTML = `${num} não é um número perfeito`
                resp2.innerHTML = ""
            }
        }
    }

})



