/*Um supermercado está com uma promoção  - Para aumentar suas vendar no setor de higiene, cada etiqueta
 de produto deve exibiri uma mensagem anunciando 50% de desconto (para um item) na compra de três unidades
  do produto. Elaborar um programa que leia descrição e preço de um produto. pós, apresente as mensaens 
  indicando a promoção */

  const frm = document.querySelector("form")
  const resp1 = document.querySelector("#resp1")
  const resp2 = document.querySelector("#resp2")

  frm.addEventListener("submit", (e)=>{
    const produto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)

    const desconto = preco - (preco*0.50)
    const valorTotal = (preco * 3) - desconto

    resp1.innerHTML = `${produto} - Promoção: Leve 3 por R$: ${valorTotal.toFixed(2)}`
    resp2.innerHTML = `O 3° produto custa apenas R$: ${desconto.toFixed(2)}`

    e.preventDefault()
  })