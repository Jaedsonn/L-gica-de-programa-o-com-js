const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    resp1.innerText = retornarTracos()
    resp2.innerText = "Categoria: " + categorizarAluno()
})

function retornarTracos(){
    const nome = frm.inNome.value
    const tracos = nome.replace(/[a-zA-Z]/g, "-")
    const string = nome + "\n" + tracos
    return string
}

function categorizarAluno() {
    const idade = Number(frm.inIdade.value)
    let categoria
    if(idade <= 12){
        categoria = "Infantil"
    } else if(idade >= 13 && idade <= 18 ){
        categoria = "Juvenil"
    } else {
        categoria = "Adulto"
    }
    return categoria
}