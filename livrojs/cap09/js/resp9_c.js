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

    /*  numServicos.innerText = localStorage.getItem("serviço").split(";").length */
    adicionarServicos()
    frm.reset()
    frm.inServico.focus()
})

const adicionarServicos = () => {
    const servicos = localStorage.getItem("serviço").split(";")
    console.log(servicos)
    numServicos.innerText = servicos == [''] ? 0 : servicos.length
}

frm.btExecutar.addEventListener("click", () => {
    const vetorPrimario = localStorage.getItem("serviço").split(";")
    const servicoEmExecucao = vetorPrimario.shift()
    localStorage.setItem("serviço", vetorPrimario.join(";"))
    removerServicos(servicoEmExecucao)
    
})

const removerServicos = (servicoEmExecucao) => {
    const servicos = localStorage.getItem("serviço").split(";")
    console.log(localStorage.getItem("serviço"))
    numServicos.innerText = servicos == [''] ? 0 : servicos.length 
    tipoServico.innerHTML = servicoEmExecucao == "" ? "Não há serviços" : servicoEmExecucao
}

window.addEventListener("load", adicionarServicos)
window.addEventListener("load", removerServicos)


