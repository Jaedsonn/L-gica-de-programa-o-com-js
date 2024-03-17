/*Criar dez imagens de números (de 0 a 9) como se fossem velas de aniversário
e salvá-las na pasta img. Em seguida, elaborar um programa que leia uma idade
e insira as imagens correspondentes na página conforme o número informado. O programa
dever permitir idades entre 1 e 120 anos.*/

const frm = document.querySelector("form")
const dvPai = document.querySelector("#divIdade")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const idade = frm.inIdade.value
    inserirImagens(idade)
})

function inserirImagens(idade) {
    const nums = idade.split("")
    for (const num of nums) {
        const nvImg = document.createElement("img")
        nvImg.src = "img/" + num + ".jpg"
        dvPai.appendChild(nvImg)
    }
}

frm.addEventListener("reset", () => window.location.reload())