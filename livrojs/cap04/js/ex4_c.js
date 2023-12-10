const frm = document.querySelector("form")
const min = document.querySelector("#resp1")
const dinheiro = document.querySelector("#resp2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const valor = Number(frm.inValor.value)
    let troco
     if (valor < 1) {
        min.innerHTML = "Valor insuficiente"
    } if (valor == 1 || valor < 1.75) {
        min.innerHTML = `Tempo: 30 min`
        troco = Math.abs(1 - valor)
        dinheiro.innerHTML = `Troco R$: ${troco.toFixed(2)}`
    } else if(valor == 1.75 || valor < 3){
        min.innerHTML = `Tempo: 60 min`
        troco = Math.abs(valor - 1.75)
        dinheiro.innerHTML = `Troco R$: ${troco.toFixed(2)}`
    } else if(valor == 3  || valor > 1.75){
        min.innerHTML = `Tempo 120 min`
        troco = Math.abs(3- valor)
        dinheiro.innerHTML = `Troco R$: ${troco.toFixed(2)}`
    }
})