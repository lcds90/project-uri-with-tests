const fns = require('../src/categories/iniciante');

describe('Exercício 1045', () => {
  const { ex1045: verifyTypeOfTriangle } = fns;
  test('TRIANGULO ACUTANGULO && TRIANGULO ISOSCELES from 7.0 5.0 7.0', () => {
    expect(verifyTypeOfTriangle('7.0 5.0 7.0')).toStrictEqual({
      acutangulo: true,
      isosceles: true,
    });
  });

  test('TRIANGULO OBTUSANGULO && TRIANGULO ISOSCELES from 6.0 6.0 10.0', () => {
    expect(verifyTypeOfTriangle('6.0 6.0 10.0')).toStrictEqual({
      obstusangulo: true,
      isosceles: true,
    });
  });

  test('TRIANGULO ACUTANGULO && TRIANGULO EQUILATERO from 6.0 6.0 10.0', () => {
    expect(verifyTypeOfTriangle('6.0 6.0 6.0')).toStrictEqual({
      acutangulo: true,
      equilatero: true,
    });
  });

  test('NAO FORMA TRIANGULO from 5.0 7.0 2.0', () => {
    expect(verifyTypeOfTriangle('5.0 7.0 2.0')).toStrictEqual({
      err: 'Não forma triângulo',
    });
  });

  test('TRIANGULO RETANGULO from 6.0 8.0 10.0', () => {
    expect(verifyTypeOfTriangle('6.0 8.0 10.0')).toStrictEqual({
      retangulo: true,
    });
  });
});

describe('Exercício 1046', () => {
  const { ex1046: verifyHowMuchTheGameLasts } = fns;
  test('O JOGO DUROU 10 HORA(S) from 16 2', () => {
    expect(verifyHowMuchTheGameLasts('16 2')).toStrictEqual(
      'O JOGO DUROU 10 HORA(S)'
    );
  });

  test('O JOGO DUROU 24 HORA(S) from 0 0', () => {
    expect(verifyHowMuchTheGameLasts('0 0')).toStrictEqual(
      'O JOGO DUROU 24 HORA(S)'
    );
  });

  test('O JOGO DUROU 14 HORA(S) from 2 16', () => {
    expect(verifyHowMuchTheGameLasts('2 16')).toStrictEqual(
      'O JOGO DUROU 14 HORA(S)'
    );
  });
 
});

