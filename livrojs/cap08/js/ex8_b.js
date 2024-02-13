const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=> {
    e.preventDefault()
    const aluno = frm.inNome.value
    const sobreNome = obterSobrenome(aluno)
    const vogais = contarVogais(aluno)
     if(validarNome(aluno)){
        resp.innerText = `Senha Inicial: ${sobreNome.toLowerCase()}${vogais.toString().padStart(2, "0")}`
    } else{
        resp.innerText = "Adicione um sobrenome"
    }
})

function validarNome(nome){
    const nome2 = nome.split(" ") 
    if(nome2.length > 1){
        return true
    } else{
        return false
    }
}

function obterSobrenome(nome){
    const nome2 = nome.split(" ")
    const nomeLargura = nome2.length
   const sobreNome = nome2[nomeLargura - 1]
    return sobreNome
}


function contarVogais(nome){
    const nome2 = nome.replace(/ /g, "").toUpperCase()
    const parâmetro = /[AEIOU]/g
    const vogais = nome2.match(parâmetro)
    
    return vogais.length
}
