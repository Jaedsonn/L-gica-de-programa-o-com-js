/*Elaborar um programa que leia um nome e, ao clicar no botão 'Exibir Partes do Nome'
, insira linhas de cabeçalho h3 na página com as partes do nome em cores aleátorias
. Ao clicar no botão, o programador deve verificar a existência de linhas de cabeçalho h3
na página, excluindo-as se houver.*/

const frm = document.querySelector("form")
const dvPai = document.querySelector("#divNome")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inNome.value
    verificarNome()
    inserirNome(nome)

    frm.reset()
    frm.inNome.focus()
})

function verificarNome() {
    const listaH3 = document.querySelectorAll("h3")
    if (listaH3.length == 0) {
        return true
    } else {
        for (const lista of listaH3) {
            dvPai.removeChild(lista)
        }
    }
}

function inserirNome(nome) {
    const separarNome = nome.split(" ")
    for (const nomes of separarNome) {
        const h3 = document.createElement("h3")
        const texto = document.createTextNode(nomes)
        h3.appendChild(texto)
        dvPai.appendChild(h3)
        
        const gerarCor = Math.ceil(Math.random() * Math.pow(10,6))
        h3.style.color = "#" + gerarCor
    }
}