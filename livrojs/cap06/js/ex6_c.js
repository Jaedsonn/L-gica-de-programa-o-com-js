const form = document.querySelector("form")
const resp = document.querySelector("pre")

const candidatos = []

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = form.inNome.value
    const nota = Number(form.inNota.value)
    if (nome.length == 0) {
        alert("Campo vazio!")
        return
    }
    candidatos.push({ nome, nota })
    form.reset()
    form.inNome.focus()
    form.inListar.dispatchEvent(new Event("click"))
})

form.inListar.addEventListener("click", () => {
    if (candidatos.length == 0) {
        alert("Não há candidatos para listar")
        return
    }
    let lista = ""
    for (const candidato of candidatos) {
        lista += candidato.nome + " - " + candidato.nota + " Acertos" + "\n"
    }
    resp.innerText = lista
})

form.inFase.addEventListener("click", () => {
    const notaCorte = Number(prompt("Número de acertor para a aprovação?"))
    let tabela = ""
    const aprovados = candidatos.filter(aux => aux.nota >= notaCorte)
    aprovados.sort((a, b) => b.nota - a.nota)
    for (const aprovado of aprovados) {
        tabela += aprovado.nome + " - " + aprovado.nota + " Acertos" + "\n"
    }
    resp.innerText = tabela
})

