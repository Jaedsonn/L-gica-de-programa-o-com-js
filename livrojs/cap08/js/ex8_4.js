const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const itens = []



frm.rbPizza.addEventListener("click", ()=>{
    const pizza = frm.inPizza
    const bebida = frm.inBebida
    pizza.className = "exibe"
    bebida.className = "oculta"
})

frm.rbBebida.addEventListener("click", ()=>{
    const pizza = frm.inPizza
    const bebida = frm.inBebida
    pizza.className = "oculta"
    bebida.className = "exibe"
})

