const prompt = require("prompt-sync")();
console.log("Digite 'Fim' Para sair")
const clientes = [];
let nome;
let idade;
do {
  nome = prompt("Nome: ");
  if (nome != "Fim") {
    idade = Number(prompt("Idade: "));
  }
  clientes.push({ nome, idade });
} while (nome !== "Fim");
clientes.pop();
const preferencial = clientes.filter((aux) => aux.idade >= 60);
const normal = clientes.filter((aux) => aux.idade <= 59);
let atendimentoP = ""
let atendimentoN = ""
for (let i = 0; i < preferencial.length; i++) {
  atendimentoP += `${i + 1}° - ${preferencial[i].nome} de ${preferencial[i].idade} anos \n`;
}
for (let i = 0; i < normal.length; i++) {
  atendimentoN += `${i + 1}° - ${normal[i].nome} de ${normal[i].idade} anos \n`;
}
console.log("Preferencial: " + "\n" +  atendimentoP + "\n"+ "-".repeat(40))
console.log("Normal: " + "\n" +  atendimentoN + "\n"+ "-".repeat(40))