const frm = document.querySelector("form")
const dataLimite = document.querySelector("#inLimite")
const desconto = document.querySelector("#inDesconto")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const data = frm.inData.value
    const multa = Number(frm.inMulta.value)

    const partes = data.split("-")
    const dia = partes[2]
    const mes = partes[1]
    const ano = partes[0]

    const date2 = new Date()
    date2.setDate(dia)
    date2.setMonth(mes)
    date2.setFullYear(ano)
    
    desconto.innerHTML = dia + "  " + mes + "  " + "  " + ano
})