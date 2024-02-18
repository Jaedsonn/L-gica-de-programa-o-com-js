const frm = document.querySelector("form")
const respLista = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inNome.value
    const peso = Number(frm.inPeso.value)

    if (verApostaExiste(peso)) {
        alert("Alguém já apostou este peso, informe outro...")
        frm.inPeso.focus()
        return
    }

    if (localStorage.getItem("melanciaNome")) { //se houver dados no localStorage obém o conteúdo já salvo e acrescenta ";" +  nome
        const melanciaNome = localStorage.getItem("melanciaNome") + ";" + nome
        const melanciaPeso = localStorage.getItem("melanciaPeso") + ";" + peso
        localStorage.setItem("melanciaNome", melanciaNome)
        localStorage.setItem("melanciaPeso", melanciaPeso)
    } else { // senão, é a primeira aposta
        localStorage.setItem("melanciaNome", nome)
        localStorage.setItem("melanciaPeso", peso)
    }

    mostrarApostas()
    frm.reset()
    frm.inNome.focus()
})

const verApostaExiste = (peso) => {
    if (localStorage.getItem("melanciaPeso")) {
        const pesos = localStorage.getItem("melanciaPeso").split(";")

        return pesos.includes(peso.toString()) // retorna true se o valor existir no vetor pesos
    } else {
        return false
    }
}

const mostrarApostas = () => {
    if (!localStorage.getItem("melanciaNome")) {
        respLista.innerText = ""
        return
    }

    const nomes = localStorage.getItem("melanciaNome").split(";")
    const pesos = localStorage.getItem("melanciaPeso").split(";")

    let linhas = ""

    for (let i = 0; i < nomes.length; i++) {
        linhas += nomes[i] + " - " + pesos[i] + "gr \n"
    }

    respLista.innerText = linhas
}

window.addEventListener("load", mostrarApostas)

frm.btVencedor.addEventListener("click", () => {
    if (!localStorage.getItem("melanciaNome")) {
        alert("Não há apostas armazenadas em localStorage")
        return
    }

    const pesoCorreto = Number(prompt("Qual o peso correto da melancia?"))

    if (pesoCorreto == 0 || isNaN(pesoCorreto)) {
        return
    }

    const nomes = localStorage.getItem("melanciaNome").split(";")
    const pesos = localStorage.getItem("melanciaPeso").split(";")

    let vencedorNome = nomes[0]
    let vencedorPeso = Number(pesos[0])

    for (let i = 0; i < nomes.length; i++) {
        const difVencedor = Math.abs(vencedorPeso - pesoCorreto)
        const difAposta = Math.abs(Number(pesos[i]) - pesoCorreto)
        /* se o difAposta for menor que o difVencedor muda o valores das variáveis vencedorNome e vencedorPeso,
        assim, a difVencedor,agora passa a realizar a operação com o valor que resultou uma diferença menor que o primeiro
        elemento do vetor. Isso se repete até que todo o vetor tenha sido percorrido*/
        if (difAposta < difVencedor) {
            vencedorNome = nomes[i]
            vencedorPeso = Number(pesos[i])
        }
    }

    let mensagem = "Resultado - Peso Correto: " + pesoCorreto + "gr"
    mensagem += "\n----------------------------------------------"
    mensagem += "\nVencedor: " + vencedorNome
    mensagem += "\nAposta: " + vencedorPeso + "gr"
    alert(mensagem)
})

frm.btLimpar.addEventListener("click" ,() =>{
    if(confirm("Confirma exclusão de todas as apostas?")){
        localStorage.removeItem("melanciaNome")
        localStorage.removeItem("melanciaPeso")
        mostrarApostas()
    }
})



