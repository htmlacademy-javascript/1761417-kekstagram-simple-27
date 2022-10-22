/* eslint-disable no-unused-vars */
const getRandomFromRange = (min, max) => {
  const minRounded = Math.ceil(min);
  const maxRounded = Math.floor(max);
  if (minRounded > maxRounded || minRounded < 0 || typeof minRounded !== 'number' || isNaN(minRounded) || maxRounded < 0 || typeof maxRounded !== 'number' || isNaN(maxRounded)) {
    return NaN;
  }
  return Math.floor(Math.random() * (maxRounded - minRounded + 1)) + minRounded;

  // вариант с использованием тернарного оператора
  // return minRounded > maxRounded
  //   || minRounded < 0
  //   || typeof minRounded !== 'number'
  //   || isNaN(minRounded)
  //   || maxRounded < 0
  //   || typeof maxRounded !== 'number'
  //   || isNaN(maxRounded)
  //   ? NaN
  //   : Math.floor(Math.random() * (maxRounded - minRounded + 1)) + minRounded;
};

//имя_функции(проверяемая_строка, максимальная_длина);
// Результат: true, если строка проходит по длине, и false — если не проходит

const checkMaxLength = (collection, maxLength) =>
  collection.length !== undefined && collection.length <= maxLength;

