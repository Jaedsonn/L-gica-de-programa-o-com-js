const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.rdYes.addEventListener("click", () => {
    const convenio = document.querySelector("#convenioContainer")
    convenio.className = "exibe-linha"

})

frm.rdNo.addEventListener("click", () => {
    const convenio = document.querySelector("#convenioContainer")
    convenio.className = "oculta"
})

const calcularDesconto = (valor, taxa) => valor * (taxa / 100)

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const valor = Number(frm.inValor.value)
    let desconto = 0
    const num = frm.inConvenio.selectedIndex

    if (frm.rdYes.checked) {
        if (num == 0) {
            desconto = calcularDesconto(valor, 50)     
        } else if (num == 1) {
            desconto = calcularDesconto(valor, 20)
        }
    } else {
        desconto = calcularDesconto(valor, 10)
    }

    resp1.innerText = `Desconto: ${desconto.toFixed(2)}`
    resp2.innerText = `A Pagar R$: ${(valor - desconto).toFixed(2)}`
})


/* function calcularDesconto() {
    const valor = Number(frm.inValor.value)
    const num = frm.inConvenio.selectedIndex
    let desconto = 0

    if (frm.rdYes.checked) {
        if(num == 0){
            desconto = valor * 50/100
        } else if(num == 1){
            desconto = valor * 20/100
        }
    } else{
        desconto = valor * 10/100
    }
    return desconto
} */