/*Elaborar um programa para um Cinem que, leia o título e a duração de um filme em minutos.
Exiba o título do filme e converta a duração para horas e minuto, conforme destacado */

//cria referência ao form e aos elementos h3 e h4(resposta)
const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

//cria um "ouvinte" de evento, acionando quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const titulo = frm.inTitulo.value //obtém conteúdo dos campos
    const duracao = Number(frm.inDuracao.value)

    const horas = Math.floor(duracao / 60) //arredonda para baixo o resultado
    const minutos = duracao % 60 //obtém o resto da divisão

    resp1.innerText = titulo
    resp2.innerText = `${horas} hora(s) e ${minutos}(s)`
})




//Esta é minha resposta para a atividade
/* let title = document.querySelector("#title")
let time = document.querySelector("#time")
let btn = document.querySelector("#btn")

btn.addEventListener("click", (e) => {
    let inTitle = document.querySelector("#inTitle").value
    let inNumber = document.querySelector("#inNumber").value
    let horas = inNumber / 60
    let horasFloor = Math.floor(horas)
    let minutos = Math.abs((horas - horasFloor) * 60)

    time.innerHTML = `${horasFloor} hora(s) e  ${minutos.toFixed(0)} minuto(s)`
    title.innerHTML = inTitle
}) */

/*Depois de ver a resolução do problema percebi que o meu código tinha alguns erros.

Primeiro: Transformar o valor do input[number] em "Number", por que mesmo que ele
so aceite números ele retornar uma string.

Segundo: Tinha um problema com o método que eu usei(Math.round()), esse método
arredondava o número(o que eu queria), mas em certas condições ele arredondava
para cima, o que, em alguns casos, poderia gerar um resultado incorreto, como
, por exemplo, ao botar "158" na duração ele retornar 3 horas e 38 minutos,
o que está incorreto, pois o resultado é 2 horas e 38 minutos, isso aconteceu
por que ele arredondou um número para cima ao invés de arredondar para o mesmo número
tirando apenas as casas decimais, para isso eu usei o mesmo método da atividade
(Math.floor()) que arredonda para baixo o número independente de suas casa decimais
, resumindo, ele só joga fora os decimais.

Terceiro(anotações): De resto, foi apenas uma questão de convemção
eu usei "id" em todos os campos que eu iria usar, o livro não,
eu usei um método diferente para conseguir os minutos que consistia em
retirar o número inteiro com uma subtração e deixar apenas os decimais
para os converter em minutos, já no livro foi usado o operador "%" o qual
retorna o resto da divisão que, eu não percebi, é exatamente os minutos,
com isso ele não precisou usar o método (Math.abs()) que eu usei para 
não ocorrer de na subtração sair um resultado negativo e ele ir para a exibição.
Outra observação foi que eu usei o "value" direto nas variáveis que selecionam os inputs
de entrada de dados, já no livro foram usadas linhas específicas para pegar o valor dos inputs
"const titulo = frm.inTitulo.value"  e "" const duracao = Number(frm.inDuracao.value).
Além disso,ele usou um campo de formulário com submit para acionar o evento*/