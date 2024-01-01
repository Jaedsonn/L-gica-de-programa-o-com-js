const prompt = require("prompt-sync")();
console.log("Informe o valor dos saques ou 0 para sair")
const saques = [];
let valor;
let situacao = "";
do {
  valor = Number(prompt("Valor: "));
  if (valor % 10 == 0) {
    situacao = "Válido";
    console.log("Saque realizado com Sucesso"+ "\n");
  } else {
    situacao = "Inválido";
    console.log("Erro...Saque "+ situacao + "\n");
  }
  saques.push({ valor, situacao });
} while (valor !== 0);
saques.pop();
const validos = saques.filter((valeu) => valeu.situacao == "Válido");
const invalidos = saques.filter((nvaleu) => nvaleu.situacao == "Inválido");
const sumValidos = validos.reduce((aux, ponto) => aux + ponto.valor, 0);
console.log("Os saques válidos foram:\n" + "-".repeat(40));
const listaValidos = validos.map((valido) => valido.valor);
for (const lista of listaValidos) {
  console.log("Valor: R$" + lista);
}
console.log("-".repeat(40))
console.log(
  `O total de saques válidos foi: R$ ${sumValidos.toFixed(2)} \nN° de tentativas de Saque: ${invalidos.length}`
);