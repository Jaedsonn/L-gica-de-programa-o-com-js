/*Construir um programa que calcule a média de um aluno. Caos a média for maior ou igual a 7
ele apresenta a mensagem "Parabéns..!Você foi aprovado(a) com a cor vermelha, porém se a média 
for menor que 7 ele apresenta a seguinte mensagem "Ops...!Você foi reprovado(a)" com a cor azul*/

//cria referência ao form e aos elementos do programa
const frm = document.querySelector("form")
const mediaN = document.querySelector("#notaMedia")
const situacao = document.querySelector("#situacao")

//cria um "ouvinte" de evento, acionanado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const nome = frm.inAluno.value  //obtém os valores do form
    const nota1 = Number(frm.inNota1.value)
    const nota2 = Number(frm.inNota2.value)

    const media = (nota1 + nota2) / 2   //calcula a média das notas
    mediaN.innerHTML = `Média das Notas ${media}`

    //cria as condições
    if (media >= 7) {
        //mediaN.innerHTML = `Média das Notas ${media}` eu que escrevi mas não precisava
        situacao.innerHTML = `Parabén ${nome}! Você foi aprovado(a)`
        situacao.style.color = "blue"
    } else {
        // mediaN.innerHTML = `Média das Notas ${media}` 
        situacao.innerHTML = `Ops ${nome}! Você foi reprovado(a)`
        situacao.style.color = "red"
    }

    e.preventDefault()// evita o envio do form
})

/*tirando alguns nomes de id's,variáveis e  que eu escrevi a exibição da média duas vezes sendo que ela só
precisava ser declarada uma já que a condição não à afeta o código é o mesmo do livro, logo, não irei reescrevê-lo*/