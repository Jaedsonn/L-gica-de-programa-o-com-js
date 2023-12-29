const prompt = require("prompt-sync")();

const alunos = [];
let nome;
let nota;
console.log("(Para sair digite: Fim)")
do {
  nome = prompt("Digite o nome do Aluno: ");
  if (nome !== "Fim") {
    nota = Number(prompt("Digite a sua nota: "));
  }
  alunos.push({ nome, nota });
} while (nome !== "Fim");

alunos.pop(nome); // tira o nome "Fim" quando digitado no prompt
/* console.log(alunos); so era para saber se o vetor tava funcionando direitinho*/

alunos.sort((a, b) => b.nota - a.nota);

/* console.log(alunos[0].nota); */
let aux = alunos[0].nota;
let destaques = [];
for (const copia of alunos) {
  const { nome, nota } = copia;
  if (aux == nota) {
    destaques.push(nome);
  }
}
destaques.join("-")
if (aux >= 7) {
  console.log(
    `A maior nota foi ${aux}! Os alunos que a obtiveram foram: ${destaques}`
  );
} else {
  console.log("Não há alunos em destaque na turma");
}
/* console.log(aux)
console.log(destaques)
 */
/* console.log(aux) */
