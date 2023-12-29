const prompt = require("prompt-sync")();

const alunos = [];
let nome;
let nota;

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
const maxNum = alunos.filter( num => num == alunos[0].nota )
/* for(const aluno of alunos){
    const {nome, nota}   = aluno
    console.log(aluno[0])
} */
