/*Elaborar um programa para um restaurante que leia o preço por kg e o consumo (em gramas)
 de um cliente. Exiba o valor a ser paga. */

//cria referência ao form e aos elementos de resposta (pelo id)
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//cria um "ouvinte" de evento, acionando quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const quilo = Number(frm.inQuilo.value) // obtém o conteúdo dos campos
    const consumo = Number(frm.inConsumo.value)

    const valor = (quilo / 1000) * consumo // calcula o valor da entrada

    resp.innerText = `Valor a pagar R$: ${valor.toFixed(2)}`// exibe as respostas

    e.preventDefault() //evita o envio do form
})

/* Minha resolução da atividade 


const frm = document.querySelector("form")
const precoQuilo = document.querySelector("#inQuilo")
const grama = document.querySelector("#inGrama")
const valor = document.querySelector("#valor")


frm.addEventListener("submit", (e) => {
    const preco = Number(frm.inQuilo.value) 
    const grama = Number(frm.inGrama.value)

    const pagar = (preco * grama) / 1000 

    valor.innerText = `Valor a pagar R$: ${pagar.toFixed(2)}`

    e.preventDefault() //evita o envio do form
}) */

/*Detalhes da resolução

    1° Uso de váriaveis: Eu usei algumas váriaveis de maneira inútil, poderia muito bem
    retirá-las já que manti a mesma estrutura do código feito nas outras atividades,
    logo, não percebi algumas inutilidades por falta de atenção.

    2° Cálculo: a formúla foi diferente, porém eu já tinha visto e levado em consideração
    a  maneira como o livro calculou o valor, porém optei por usar outra(o que não faz
    diferença já que dá o mesmo resultado independente de qual usar)

    3° Detalhes: Outras diferenças(como sempre) foram as maneiras de selecionar os
    elementos HTML, os id's e os escopos das váriaveis, tirando isso, por conta que eu usei
    o mesmo modelo de código das outras atividades, tudo ficou Okay.
*/ 