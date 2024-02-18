const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const produto = frm.inProduto.value
    if (!localStorage.getItem("produto")) {
        localStorage.setItem("produto", produto)
    } else {
        const item = localStorage.getItem("produto") + ";" + produto
        localStorage.setItem("produto", item)
    }

    mostrarLista()
    frm.reset()
    frm.inProduto.focus()
})

const mostrarLista = () => {
    let lista = "Produtos Adicionados" + "\n" + "-".repeat(40) + "\n"
    const itens = localStorage.getItem("produto").split(";").sort((a, b) => a.localeCompare(b))
    for (let i = 0; i < itens.length; i++) {
        lista += itens[i] + "\n"
    }
    resp.innerText = lista
}

frm.btLimpar.addEventListener("click", () => {
    if (localStorage.getItem("produto") == null) {
        alert("Não há produtos cadastrados")
        frm.inProduto.focus()
        return
    }

    localStorage.removeItem("produto")
    resp.innerText = ""
})

window.addEventListener("load", mostrarLista())
