const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const carros = []

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const modelo = frm.inModelo.value
    const preco = Number(frm.inPreco.value)
    carros.push({modelo, preco})
    frm.inModelo.value = ""
    frm.inPreco.value = ""
    frm.inModelo.focus()
    //dispara um evento de click em btListar (equivale a um click no botão na página)
    frm.btListar.dispatchEvent(new Event("click"))  
})

frm.btListar.addEventListener("click", () => {
    if(carros.length == 0){
        alert("Não há carros na lista")
        return
    }

     const lista = carros.reduce((acumulador, carro) => 
     acumulador + carro.modelo + " - R$: " + carro.preco.toFixed(2) + "\n", "")
 
    resp.innerText = `Lista dos Carros Cadastrados\n${"-".repeat(40)}\n${lista}`
})

frm.btFiltrar.addEventListener("click", (e) =>{
    const maximo = Number(prompt("Qual o valor máximo que o cliente deseja pagar?"))
    if(maximo == 0 || isNaN(maximo)){
        return
    }

    //cria um vetor que atende as condições do filtro
    const carrosFilter = carros.filter(carro => carro.preco <= maximo)
    if(carrosFilter.length == 0){
        alert("Não há carros com o preço inferior ou igual ao solicitado")
        return
    }
    let lista = ""
    for(const carro of carrosFilter){
        lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`
    }
    resp.innerText = `Carros Até R$: ${maximo.toFixed(2)}\n${"-".repeat(40)}\n${lista}`
})

frm.btSimular.addEventListener("click", () => {
    const desconto = Number(prompt("Qual o percentual de desconto: "))
    if (desconto == 0 || isNaN(desconto)) {    // se não informou ou valor inválido
      return                                   // ... retorna
    }
    const carrosDesc = carros.map(aux => ({
      modelo: aux.modelo,
      preco: aux.preco - (aux.preco * desconto / 100)
    }))
    let lista = ""
    for (const carro of carrosDesc) {       // percorre cada elemento do array 
      lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`
    }
    resp.innerText = `Carros com desconto: ${desconto}%\n${"-".repeat(40)}\n${lista}`
  })
