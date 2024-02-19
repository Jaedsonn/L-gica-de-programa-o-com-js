const frm = document.querySelector("form")
const numServicos = document.querySelector("span")
const tipoServico = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const servico = frm.inServico.value
    if (!localStorage.getItem("serviço")) {
        localStorage.setItem("serviço", servico)
    } else {
        const item = localStorage.getItem("serviço") + ";" + servico
        localStorage.setItem("serviço", item)
    }

    numServicos.innerText = localStorage.getItem("serviço").split(";").length
    frm.reset()
    frm.inServico.focus()
})

frm.btExecutar.addEventListener("click", () => {
    const vetorPrimario = localStorage.getItem("serviço").split(";").length
    vetorPrimario.shift()
    localStorage.setItem("serviço", vetorPrimario.join(";"))
    const a = localStorage.getItem("serviço").split(";").length
    numServicos.innerText = a
})


