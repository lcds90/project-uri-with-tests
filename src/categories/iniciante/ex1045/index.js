// SECTION Exercício 1045
/* 
LINK https://www.urionlinejudge.com.br/judge/pt/runs/code/23785372
NOTE Descrição
Leia 3 valores de ponto flutuante A, B e C e ordene-os em ordem decrescente, de modo que o lado A representa o maior dos 3 lados. A seguir, determine o tipo de triângulo que estes três lados formam, com base nos seguintes casos, sempre escrevendo uma mensagem adequada:
se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO
se A2 = B2 + C2, apresente a mensagem: TRIANGULO RETANGULO
se A2 > B2 + C2, apresente a mensagem: TRIANGULO OBTUSANGULO
se A2 < B2 + C2, apresente a mensagem: TRIANGULO ACUTANGULO
se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO
se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES
Entrada
A entrada contem três valores de ponto flutuante de dupla precisão A (0 < A) , B (0 < B) e C (0 < C).

Saída
Imprima todas as classificações do triângulo especificado na entrada.
*/
/*
const verifyTypeOfTriangleUri = (input) => {
  const [n1, n2, n3] = input
    .split(' ')
    .map((n) => Number(n))
    .sort((a, b) => b - a);

  const naoFormaTriangulo = n1 >= n2 + n3 ? true : false;
  const retangulo = n1 * n1 === n2 * n2 + n3 * n3 ? true : false;
  const obtusangulo = n1 * n1 > n2 * n2 + n3 * n3 ? true : false;
  const acutangulo = n1 * n1 < n2 * n2 + n3 * n3 ? true : false;
  const equilatero = n1 === n2 && n1 === n3 && n2 === n3 ? true : false;
  const isoscelesOne =
    (n1 === n2 && n1 !== n3) || (n1 !== n2 && n1 === n3) ? true : false;
  const isoscelesTwo =
    (n2 === n1 && n2 !== n3) || (n2 !== n1 && n2 === n3) ? true : false;
  const isoscelesThree =
    (n3 === n2 && n3 !== n1) || (n3 !== n2 && n3 === n1) ? true : false;
  const isosceles =
    (isoscelesOne && (isoscelesTwo || isoscelesThree)) ||
    (isoscelesTwo && isoscelesThree);

  if (naoFormaTriangulo) {
    console.log('NAO FORMA TRIANGULO');
    return;
  }
  if (retangulo) console.log('TRIANGULO RETANGULO');
  if (obtusangulo) console.log('TRIANGULO OBTUSANGULO');
  if (acutangulo) console.log('TRIANGULO ACUTANGULO');
  if (equilatero) console.log('TRIANGULO EQUILATERO');
  if (isosceles) console.log('TRIANGULO ISOSCELES');
};
const { findExample } = require('../');
const [testOne, testTwo, testThree, testFour, testFifth] = [
  findExample('ex1045', '1'),
  findExample('ex1045', '2'),
  findExample('ex1045', '3'),
  findExample('ex1045', '4'),
  findExample('ex1045', '5'),
];

verifyTypeOfTriangleUri(testOne);
verifyTypeOfTriangleUri(testTwo);
verifyTypeOfTriangleUri(testThree);
verifyTypeOfTriangleUri(testFour);
verifyTypeOfTriangleUri(testFifth);
*/
// !SECTION

const verifyTypeOfTriangle = (input) => {
  const results = {};
  const [n1, n2, n3] = input
    .split(' ')
    .map((n) => Number(n))
    .sort((a, b) => b - a);

  const naoFormaTriangulo = n1 >= n2 + n3 ? true : false;
  const retangulo = n1 * n1 === n2 * n2 + n3 * n3 ? true : false;
  const obtusangulo = n1 * n1 > n2 * n2 + n3 * n3 ? true : false;
  const acutangulo = n1 * n1 < n2 * n2 + n3 * n3 ? true : false;
  const equilatero = n1 === n2 && n1 === n3 && n2 === n3 ? true : false;
  const isoscelesOne =
    (n1 === n2 && n1 !== n3) || (n1 !== n2 && n1 === n3) ? true : false;
  const isoscelesTwo =
    (n2 === n1 && n2 !== n3) || (n2 !== n1 && n2 === n3) ? true : false;
  const isoscelesThree =
    (n3 === n2 && n3 !== n1) || (n3 !== n2 && n3 === n1) ? true : false;
  const isosceles =
    (isoscelesOne && (isoscelesTwo || isoscelesThree)) ||
    (isoscelesTwo && isoscelesThree);

  if (naoFormaTriangulo) {
    return { err: 'Não forma triângulo' };
  }

  if (retangulo) results.retangulo = true;
  if (obtusangulo) results.obstusangulo = true;
  if (acutangulo) results.acutangulo = true;
  if (equilatero) results.equilatero = true;
  if (isosceles) results.isosceles = true;
  return results;
};

module.exports = verifyTypeOfTriangle;
