const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const permitida = Number(frm.inPermitida.value)
    const condutor = Number(frm.inCondutor.value)

    const aux = (permitida * 0.20) + permitida

    if (condutor <= permitida) {
        resp.innerText = "Situação: Sem Multa"
    } else if (condutor <= aux/* > permitida && condutor <= aux */){
        resp.innerText = "Situação: Multa Leve"
    } else if (condutor > aux) {
        resp.innerText = "Situação: Multa Grave"
    } 
})