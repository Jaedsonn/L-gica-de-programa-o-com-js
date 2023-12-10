/*Elaborar um programa para uma lan house de um aeroporto - O programa deve ler o valor de cada 15 minutos
de uso de um computador e o tempo de uso por um cliente em minutos. Informe o valor a ser paga pelo cliente,
 sabendo que as freação extras de 15 minutos devem ser cobradas de forma integral*/





/*   const frm = document.querySelector("form")
const resp = document.querySelector("h3")
 
frm.addEventListener("submit", (e) => {
   
 
 
    const valor = (3 / 15) * 25
    const resto =   (25 % 15) * 1
    const valorResto = ((resto / 25) * 15) - valor
 
 
    resp.innerText = valor + valorResto
 
    e.preventDefault()
}) 

 */

const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const valorMin = Number(frm.inValor.value)
    const tempoCliente = Number(frm.inTempo.value)

    const valor = Math.ceil((tempoCliente / 15)) * valorMin //5

    resp.innerText = valor

    e.preventDefault()
})  