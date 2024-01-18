const frm = document.querySelector("form")
const resp = document.querySelector("#outResp")

let par = ""
frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const mensagem = frm.inMensagem.value
    
    for (let i = 0; i < mensagem.length; i++) {
       
            par += mensagem.charAt(2)
    }
})
console.log(par)