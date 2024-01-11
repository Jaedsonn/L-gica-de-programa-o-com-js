const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=> {
    e.preventDefault()
    const senha = frm.inSenha.value
    const erros = []

    //Verifica se o tamanho  da senha é inválido
    if(senha.length < 8 || senha.length > 15){
        erros.push("possuir entre 8 e 15 caracteres")
    }

    //Verifica se não pussúi números
    if(senha.match(/[0-9]/g) == null){
        erros.push("Possuir números (no mínimo, 1)")
    }

    //Verifica se não possui letras minúsculas
    if(senha.match(/[a-z]/g) == null){
        erros.push("Possuir letras minúsculas (no mínimo, 1)")
    }

    //Verifica se não possui letras maiúsculas ou se possui apenas 1
    if(senha.match(/[A-Z]/g) == null || senha.match(/[A-Z]/g).length == 1){
        erros.push("possuir letras maiúsculas (no mínimo, 2)")
    }

    //Verifica se não possui símbolos
    if(!senha.match(/[\w|_]/g)){
        erros.push("possuir símbolos (no mínimo, 1)")
    }

    if(erros.length == 0){
        resp.innerHTML = "Ok! Senha válida"
    } else{
        resp.innerHTML = `Erro... A senha deve ${erros.join(",")}`
    }
})