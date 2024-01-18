const frm = document.querySelector("form")
const resp = document.querySelector("#outResp")

let par
frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const mensagem = frm.inMensagem.value
    const partes = mensagem.split("")
    const tam = partes.length
    for(let i = 0; i <= tam - 1; i++){
        par += partes
    }
    console.log(tam)
    resp.innerHTML = par
})
