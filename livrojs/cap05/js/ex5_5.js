const frm = document.querySelector("form")   // obtém elementos da página
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

let numContas = 0   // declara e inicializa contador...
let valTotal = 0    // ... e acumulador (variáveis globais)
let resposta = ""   // string com a resposta a ser exibida  

frm.addEventListener("submit", (e) => {     // "escuta" evento submit do form 
  e.preventDefault()                        // evita envio do form

  const descricao = frm.inDescricao.value      // obtém dados da conta
  const valor = Number(frm.inValor.value)

  numContas++                      // adiciona valores ao contador e acumulador
  valTotal = valTotal + valor

  resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n"  

  resp1.innerText = `${resposta}--------------------------------`
  resp2.innerText = `${numContas} Conta(s) - Total R$: ${valTotal.toFixed(2)}`

  frm.inDescricao.value = ""      // limpa campos do form
  frm.inValor.value = ""
  frm.inDescricao.focus()         // posiciona no campo inDescricao do form
})


/* const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

let contas = 0
let soma = 0


frm.addEventListener("submit", (e)=>{
    e.preventDefault()

    let descricao = frm.inDescricao.value
    let valor = Number(frm.inValor.value)
    soma = soma + valor
    contas++
    resp1.innerHTML  += `${descricao} - R$: ${valor.toFixed(2)}\n`
    resp2.innerHTML = `${contas} Conta(s) - Total R$: ${soma.toFixed(2)}`
}) */