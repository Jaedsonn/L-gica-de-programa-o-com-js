const frm = document.querySelector("form")
const outPut = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const nome =  frm.inNome.value

    const parte = nome.split(" ")
    let email = ""
    const tam = parte.length

     for(let i = 0; i < tam - 1; i ++){
        email += parte[i].charAt(0)
    } 

    email += parte[tam - 1] + "@empresa.com.br"

    outPut.innerHTML = ` Email: ${email.toLowerCase()}`

})

