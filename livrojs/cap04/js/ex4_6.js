const frm = document.querySelector("form")   // obtém elementos da página
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

frm.addEventListener("submit", (e) => {     // "escuta" evento submit do form 
  e.preventDefault()                        // evita envio do form

  const saque = Number(frm.inSaque.value)   // obtém valor do saque

  if (saque % 10 != 0) {                    // se saque não é múltiplo de 10
    alert("Valor inválido para notas disponíveis (R$ 10, 50, 100)")
    frm.inSaque.focus()
    return
  }

  const notasCem = Math.floor(saque / 100)       // calcula notas de 100
  let resto = saque % 100                        // quanto sobra para pagar
  const notasCinquenta = Math.floor(resto / 50)  // calcula notas de 50
  resto = resto % 50                             // quanto ainda sobra
  const notasDez = Math.floor(resto / 10)        // calcula notas de 10

  if (notasCem > 0) {                             // exibe as notas se houver
    resp1.innerText = `Notas de R$ 100: ${notasCem}`
  }
  if (notasCinquenta > 0) {
    resp2.innerText = `Notas de R$ 50: ${notasCinquenta}`
  }
  if (notasDez > 0) {
    resp3.innerText = `Notas de R$ 10: ${notasDez}`
  }
})

/* MEU CÓDIGO PARA O EXEMPLO 6
const frm = document.querySelector("form")
const resp100 = document.querySelector("#cem")
const resp50 = document.querySelector("#cinquenta")
const resp10 = document.querySelector("#dez")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const valor = Number(frm.inValor.value)
    let validade = valor % 10

    if (validade == 0) {
        let nota1 = Math.floor(valor / 100)
        let nota2 = Math.floor((valor % 100) / 50)
        let nota3 = Math.floor((valor % 50) / 10)

        resp100.innerHTML =`Notas de R$ 100: ${nota1}`
        resp50.innerHTML = `Notas de R$ 50: ${nota2}`
        resp10.innerHTML = `Notas de R$ 10: ${nota3}`
    } else {
        resp50.innerHTML = ""
        resp10.innerHTML = ""
        resp100.innerHTML = "Não conseguimos pagar esse valor com as notas disponíveis(temos notas de R$10, R$50 e R$100)"
    }

}) */
