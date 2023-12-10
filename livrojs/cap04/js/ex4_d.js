const frm = document.querySelector("form")
const lados = document.querySelector("#resp1")
const tipo = document.querySelector("#resp2")


frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const a = Number(frm.inA.value)
    const b = Number(frm.inB.value)
    const c = Number(frm.inC.value)
    const soma1 = a + b //c
    const soma2 = a + c // b
    const soma3 = c + b //a
    if (soma1 < c || soma2 < b || soma3 < a) {
        lados.innerHTML = "Não é um triângulo"
    } else {
        if (a == b && a == c && c == b) {
            lados.innerHTML = "Os lados podem formar um triângulo"
            tipo.innerHTML = "Tipo: Equilátero"
        } else if(a == b || a == c || c == b ){
            lados.innerHTML = "Os lados podem formar um triângulo"
            tipo.innerHTML = "Tipo: Isósceles"
        } else if(a != b && a != c && c != b){
            lados.innerHTML = "Os lados podem formar um triângulo"
            tipo.innerHTML = "Tipo: Escaleno"
        }
    }

})