// SECTION Exercício 1046
/* 
LINK https://www.urionlinejudge.com.br/judge/pt/runs/code/23786011
NOTE Descrição
Leia a hora inicial e a hora final de um jogo. A seguir calcule a duração do jogo, sabendo que o mesmo pode começar em um dia e terminar em outro, tendo uma duração mínima de 1 hora e máxima de 24 horas.

Entrada
A entrada contém dois valores inteiros representando a hora de início e a hora de fim do jogo.

Saída
Apresente a duração do jogo conforme exemplo abaixo.
*/
/*
const { findExample } = require('../');
const [testOne, testTwo, testThree] = [
  findExample('ex1046', '1'),
  findExample('ex1046', '2'),
  findExample('ex1046', '3'),
];

const verifyHowMuchTheGameLastsUri = (input) => {
  const [n1, n2] = input.split(' ').map((n) => Number(n));
  let howMuchLeft = (24 - (n1 - n2));
  if (howMuchLeft > 24) howMuchLeft -= 24;
  console.log(`O JOGO DUROU ${howMuchLeft} HORA(S)`);
};

verifyHowMuchTheGameLastsUri(testOne);
verifyHowMuchTheGameLastsUri(testTwo);
verifyHowMuchTheGameLastsUri(testThree);
*/
// !SECTION

const verifyHowMuchTheGameLasts = (input) => {
    const [n1, n2] = input.split(' ').map((n) => Number(n));
    let howMuchLeft = (24 - (n1 - n2));
    if (howMuchLeft > 24) howMuchLeft -= 24;
    return `O JOGO DUROU ${howMuchLeft} HORA(S)`;
};

module.exports = verifyHowMuchTheGameLasts;
