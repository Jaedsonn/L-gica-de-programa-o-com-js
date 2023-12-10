/*Elaborar um programa para uma revenda de veículos. O programa deve ler modelo
 e preço do veículo. Apresentar como resposta o valor da entrada (50%) e o saldo
 em 12x.*/


//cria referência ao form e aos elementos de resposta (pelo id)
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

//cria um "ouvinte" de evento, acionando quando o botão submit for clicado
frm.addEventListener("submit", (e)=>{
    const veiculo = frm.inVeiculo.value // obtém o conteúdo dos campos
    const preco = Number(frm.inPreco.value)

    const entrada = preco * 0.50 // calcula o valor da entrada
    const parcela = (preco * 0.50) /12 // ... e das parcelas

    resp1.innerText = `Promoção: ${veiculo}`// exibe as respostas
    resp2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`
    resp3.innerText = `+12x de R$ ${parcela.toFixed(2)}`

    e.preventDefault() //evita o envio do form
})


//Essa é a minha resposta para a atividade
/* const frm = document.querySelector("form")

frm.addEventListener("submit", (e) => {
    const inVeiculo = document.querySelector("#inVeiculo").value
    const preco = Number(document.querySelector("#preco").value)

    const modelo = document.querySelector("#inModelo")
    const entrada = document.querySelector("#entrada")
    const saldo = document.querySelector("#saldo")

    let etr = preco - (preco * 50/100)
    let sld = etr/12

    modelo.innerHTML += inVeiculo
    entrada.innerHTML += etr.toFixed(2)
    saldo.innerHTML = `+ 12x de R$ ${sld.toFixed(2)}`
    e.preventDefault()
})
 */

/*
Pontuando algumas diferenças de código

1° Declaração de váriaveis: Eu declarei apenas a váriavel "frm" fora da função,
todas as outras foram declaradas dentro, diferentemente da resolução do livro,
onde todas as váriaveis que selecionavam os elementos estão fora da função.

2° Cálculos: Eu calculei o valor de entrada de uma maneira mais rústica que a dele
, apesar de que funciona, só é um pouco de nada maior, além de que eu fiz uma subtração
do valor de 50% do preco menos seu valor total, o que poderia ser feito(como no livro)
apenas calculando 50%, dá no mesmo. Já a parcela, eu gostei mais do meu cálculo, já que
no livro foi refeita a conta de 50% do preco e dividida por 12, eu apenas peguei essse valor
que estava na váriavel de entrada e o dividi por 12.

3° Detalhes bestas: uso do innerHTMl e innerText, maneira como forma reescritos os textos e
nome dos id's
*/