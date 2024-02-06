const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const itens = [];

frm.rbPizza.addEventListener("click", () => {
    const pizza = frm.inPizza;
    const bebida = frm.inBebida;
    pizza.className = "exibe";
    bebida.className = "oculta";
});

frm.rbBebida.addEventListener("click", () => {
    const pizza = frm.inPizza;
    const bebida = frm.inBebida;
    pizza.className = "oculta";
    bebida.className = "exibe";
});

frm.inDetalhes.addEventListener("focus", () => {
    if(frm.rbPizza.checked){
        const pizza = frm.inPizza.value
        const num = pizza == "media" ? 2 : pizza == "grande" ? 3  : 4
        frm.inDetalhes.placeholder = `Até ${num} sabores`
    }
})

frm.inDetalhes.addEventListener("blur", () =>{
    frm.inDetalhes.placeholder = " "
})