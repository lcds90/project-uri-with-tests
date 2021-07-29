// SECTION Exercício 1045
// LINK https://www.urionlinejudge.com.br/judge/pt/runs/code/23785372

/* const verifyTypeOfTriangleUri = (input) => {
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
verifyTypeOfTriangleUri(testFifth); */
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
