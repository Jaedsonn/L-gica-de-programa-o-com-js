//cria referência ao form e ao elemtno onde será exibida a resposta
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//"ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e)=>{
    e.preventDefault()

    //obtém e converte o conteúdo do campo inHoraBrasil
    const horaBrail = Number(frm.inHoraBrasil.value)
    let horaFranca = horaBrail + 5
    if(horaFranca > 24){
        horaFranca = horaFranca - 24
    }
    resp.innerText = `Hora na França ${horaFranca.toFixed(2)}`
})