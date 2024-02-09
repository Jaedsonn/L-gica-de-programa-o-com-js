const prompt = require("prompt-sync")()

const vinhos = []

function titulo(texto){
    console.log()
    console.log(texto)
    console.log("=".repeat(40))
}

do{
    titulo("===<Cadastro de Vinhos>===")
    console.log("1. Inclusão de Vinhos")
    console.log("2 .Listagem de Vinhos")
    console.log("3. Pesquisa por Tipo")
    console.log("4.Média e Destaques")
    console.log("5. Finalizar")
    const opcao = Number(prompt("Opção: "))
    if(opcao == 1){
        incluir()
    }
    else if (opcao == 2){
        listar()
    }
    else if(opcao == 3){
        pesquisar()
    }
    else if(opcao == 4){
        calcularMedia()
    } else {
        break
    }
}while(true)