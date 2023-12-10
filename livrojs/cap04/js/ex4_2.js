/*Um programa que calcule o peso ideal de uma pessoa através de uma formúla que ultiliza sua altura e seu
gênero,altura^2 * 22 se for homem, se for mulher troque o 22 por 21*/

//cria referência ao form e elemento onde será exibida a resposta 
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//"ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const masculino = frm.inMasculino.checked //obtém os valores do form
    const nome = frm.inNome.value
    const altura = Number(frm.inAltura.value)

    let peso    //declara a variável peso
    if (masculino) { // se masculino(ou, if (masculino == true))
        peso = 22 * Math.pow(altura, 2)
        //resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)}Kg` meu código
    } else {
        peso = 21 * Math.pow(altura, 2)
        //resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)}Kg` meu código
    }

    resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)}Kg` // código do livro
})

frm.addEventListener("reset", () => {
    resp.innerText = ""
})

/*  O CÓDIGO PERTENCE AO LIVRO,EM GRANDE PARTE, POR FALTA DE CONHECIMENTO DO ALUNO :(
Não conseguir resolver o exercício sozinho, tive dificuldade em obter o valor do input:radio por que 
eu não sabir ultilizar o atributo "checked", apesar de saber usa-lo no css, no JavaScript.
Além do método "Math.pow()" que eu não usei e do evento no final(reset) que eu não notei sua  real ultilidade,
de resto foi eu, apesar de que vou deixar algumas linhas do meu código comentadas por questões de estudo
 no futuro e para notar minha evolução na construção de programas
*/