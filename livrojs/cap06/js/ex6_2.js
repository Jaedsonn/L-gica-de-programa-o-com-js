const frm = document.querySelector("form")
const resp1 = Number(document.querySelector("#respOut1"))
const resp2 = Number(document.querySelector("#respOut2"))
const resp3 = document.querySelector("#respOut3")
const sorteado = Math.floor(Math.round() * 100 + 1)

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    if(numero == sorteado){
        alert("Parabéns! Você acertou o número.")
    } else {
        resp1.innerHTML += 1
        resp2.innerHTML -= 1
      
    }
})