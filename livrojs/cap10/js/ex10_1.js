const frm = document.querySelector("form")
const dvQuadro = document.querySelector("#divQuadro")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const tarefa = frm.inTarefa.value

    const h5 = document.createElement("h5") // cria o elemento html h5
    const texto = document.createTextNode(tarefa)// cria um texto
    h5.appendChild(texto)
    dvQuadro.appendChild(h5)

    frm.inTarefa.value = ""
    frm.inTarefa.focus()
})

frm.btSelecionar.addEventListener("click", ()=>{
    const tarefas = document.querySelectorAll("h5")

    if(tarefas.length == 0){
        alert("Não há tarefas para selecionar")
        return
    }

    let aux = -1 // varíavel auxiliar para indicar a linha selecionada

    //percorre a lista de elementos h5 inseridos na página, ou seja, tarefas
    for(let i = 0; i < tarefas.length;i++){
        //se taf é da class tarefa-selecionada (está selecionada)
        if(tarefas[i].className == "tarefa-selecionada"){
            tarefas[i].className = "tarefa-normal"
            aux = i
            break
        }
    }

    // se a linha que está selecionada é a última, irá voltar para a primeira linha

    if(aux == tarefas.length - 1){
        aux = -1
    }

    tarefas[aux + 1].className = "tarefa-selecionada"
})