const frm = document.querySelector("form")
const resp = document.querySelector("#outResp")

let par = ""
let impar = ""
frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const mensagem = frm.inMensagem.value
    const partes = mensagem.split("")
    const tam = mensagem.length - 1

    for (let i = 0; i <= tam; i++) {
        if(i % 2 == 0 || i == 0){
            par += partes[i]
        } else{
            impar += partes[i]
        }
    }
    resp.innerHTML = par + " " + impar
})
