/*UMA FARMÁCIA ESTÁ COM UM PROMOÇÃO-Na compra de duas unidades de um mesmo medicamento, o cliente recebe
como desconto os centavos do valor total.Elaborar um programa que leia descrição e preço de um medicamento
. Informe o valor do produto na promoção.*/

const frm = document.querySelector("form")
const promocao = document.querySelector("#promocao")
const oferta = document.querySelector("#oferta")

frm.addEventListener("submit", (e)=>{
    const medicamento = frm.inMedicamento.value
    const preco = Number(frm.inPreco.value)

    const precoTotal = Math.floor(preco*2)
    
    promocao.innerText = `Promoção de ${medicamento}`
    oferta.innerText = `Leve 2 por apenas R$: ${precoTotal.toFixed(2)}`

    e.preventDefault()
// Aqui eu estou tentando criar uma maneira de pegar o valor sem decimais de depois mostra-lo nna oferta como pedido
})