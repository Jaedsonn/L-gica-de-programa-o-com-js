const frm = document.querySelector("form")
const resp = document.querySelector("#outResp")

let par = ""
let impar = ""
frm.addEventListener("submit", (e) => {
    e.preventDefault()
    resp.innerHTML = " "
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
    const par2 = par.split(" ").join("")
    const impar2 = impar.split(" ").join("")
    
    const frase = par2 + " " + impar2
    resp.innerHTML = frase
    par = ""
    impar = ""
})

frm.inBtn.addEventListener("click", (e)=>{
    const mensagem = frm.inMensagem.value
    resp.innerHTML = mensagem
})
