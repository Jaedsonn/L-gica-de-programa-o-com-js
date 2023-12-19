const frm = document.querySelector("form");
const respErros = document.querySelector("#outErros");
const respChances = document.querySelector("#outDicas");
const respDica = document.querySelector("#outDica");

const erros = [];
const sorteado = Math.floor(Math.random() * 100 + 1);
const CHANCES = 6;

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const numero = Number(frm.inNumero.value);
  if (numero == sorteado) {
    respDica.innerHTML = `Parabéns!! Número sorteado: ${sorteado}`
    frm.btSubmit.disabled = true
    frm.btNovo.className = "exibe"
  }
});
