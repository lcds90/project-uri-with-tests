// SECTION Exercício 1047
/* 
LINK https://www.urionlinejudge.com.br/judge/pt/problems/view/1047
NOTE Descrição
Leia a hora inicial, minuto inicial, hora final e minuto final de um jogo. A seguir calcule a duração do jogo.

Obs: O jogo tem duração mínima de um (1) minuto e duração máxima de 24 horas.

Entrada
Quatro números inteiros representando a hora de início e fim do jogo.

Saída
Mostre a seguinte mensagem: “O JOGO DUROU XXX HORA(S) E YYY MINUTO(S)” .
*/

const { findExample } = require('../');
const [testOne, testTwo, testThree] = [
  findExample('ex1047', '1'),
  findExample('ex1047', '2'),
  findExample('ex1047', '3'),
];

const howMuchTheGameLastsUri = (input) => {
  const [hInicio, mInicio, hFinal, mFinal] = input
    .split(' ')
    .map((n) => Number(n));

  

/*   let totalH = hFinal - hInicio;
  let totalM = mFinal - mInicio;

  if(Math.sign(totalH) === -1) {
    totalH = 24 + (hFinal - hInicio); 
  }

  if (totalM < 0) {
    totalM = 60 + (mFinal - mInicio);
    totalH--;
  } */

  hInicio === hFinal && mInicio === mFinal
    ? console.log(
        `O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)`
      )
    : console.log(
        `O JOGO DUROU ${totalH} HORA(S) E ${totalM} MINUTO(S)`
      );
};

howMuchTheGameLastsUri(testOne);
howMuchTheGameLastsUri(testTwo);
howMuchTheGameLastsUri(testThree);

// !SECTION

const howMuchTheGameLasts = (input) => {
  const [n1, n2] = input.split(' ').map((n) => Number(n));
  let howMuchLeft = 24 - (n1 - n2);
  if (howMuchLeft > 24) howMuchLeft -= 24;
  return `O JOGO DUROU ${howMuchLeft} HORA(S)`;
};

module.exports = howMuchTheGameLasts;
