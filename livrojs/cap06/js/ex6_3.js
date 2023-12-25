const frm = document.querySelector("form")
const reps = document.querySelector("pre")
const carros = []

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const modelo = frm.inModelo.value
    const preco = Number(frm.inPreco.value)
    carros.push({modelo, preco})
    frm.inModelo = " "
    frm.inPreco = " "
    inModelo.focus()
})