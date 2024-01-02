const form = document.querySelector("form")
const resp = document.querySelector("pre")

const times = []

form.addEventListener("submit", (e) =>{
    e.preventDefault()

    const timeNome = form.inTime.value
    times.push(timeNome)
    form.reset()
    form.inTime.focus()
    form.inLista.dispatchEvent(new Event("click"));
})

form.inLista.addEventListener("click", () =>{
    let lista = ""
    if(times.length == 0){
        alert("Não há times para listar")
    } else{
        for(const time of times ){
            lista += time + "\n"
        }
    }
    resp.innerText = "Times\n" + "-".repeat(40) + "\n" + lista
})

form.inTabela.addEventListener("click", () =>{
    let tabela = ""
    if(times.length % 2 !== 0){
      alert("Não há como montar a tabela com um número ímpar de times")
      return 
    } else{
        for(let i = 1; i <= times.length/2; i++){
             tabela += times[i - 1] + " x "+ times[times.length - i] + "\n"
        }
    }
    resp.innerText = "Jogos\n" + "-".repeat(40) + "\n" + tabela
})