const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    let result = numero % 2 == 0? "Par":"Ímpar"
    resp.innerText = `${numero} é ${result}`
   /*   if(numero % 2 == 0){
        result = "Par"
        resp.innerText = `${numero} é ${result}`
    } else {
        result = "Ímpar"
        resp.innerText = `${numero} é ${result}`
    }  */
})