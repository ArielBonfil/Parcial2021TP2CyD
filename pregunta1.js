/**
 * Dado un array de numeros enteros, complete las funciones para que retorne un array conteniendo
 * solo los numeros pares y solo numeros impares respectivamente
 */

const even = function (numbers) {
  let arrPares = [];
  numbers.forEach((number) => {
    if (number % 2 == 0) {
      arrPares.push(number);
    }
  });
  return arrPares;
};

const odd = function (numbers) {
  let arrImpares = [];
  numbers.forEach((number) => {
    if (number % 2 != 0) {
      arrImpares.push(number);
    }
  });
  return arrImpares;
};

// TESTS (no modificar)
const arrEqual = (a1, a2) => JSON.stringify(a1) == JSON.stringify(a2);
console.log(arrEqual(even([4, 2, 6, 1, 0, 2, 5]), [4, 2, 6, 0, 2]));
console.log(arrEqual(odd([4, 2, 6, 1, 0, 2, 5]), [1, 5]));
