const frm = document.querySelector("form")
const resp = document.querySelector("#outResp")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const frase = frm.inFrase.value.toUpperCase()
    const inverso = frase.split("").reverse().join("").toUpperCase()

    const frase2 = frase.replace(/ /g, "")
    const inverso2 = inverso.replace(/ /g, "")
    
    if (inverso2.includes(frase2) == true) {
        resp.innerHTML = `${frase} é um Palíndromo`
    } else {
        resp.innerHTML = `${frase} não é um Palíndromo`
    }
   
})