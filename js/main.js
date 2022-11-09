/* eslint-disable no-unused-vars */

const checkMaxLength = (collection, maxLength) =>
  collection.length !== undefined && collection.length <= maxLength;

function getRandomPositiveInteger(a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function checkStringLength(string, length) {
  return string.length <= length;
}

const getRandomDescription = () => {
  const nounDictionary = ['кот', 'погода', 'пейзаж', 'картинка', 'основа', 'функция', 'пользователь', 'массив', 'код', 'задание'];
  const verbDictionary = ['смотрит', 'дышит', 'спит', 'делается', 'выполняется', 'регистрируется', 'проверяется', 'получается', 'создается', 'пишется'];
  const randomNoun = nounDictionary[getRandomPositiveInteger(0, nounDictionary.length - 1)];
  const randomVerb = verbDictionary[getRandomPositiveInteger(0, verbDictionary.length - 1)];
  return `${randomNoun} ${randomVerb}`;
};

const createObj = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: getRandomDescription(),
  likes: getRandomPositiveInteger(15, 200),
  comments: getRandomPositiveInteger(0, 200),
});

const get25Objects = () => {
  const result = [];
  for (let i = 1; i < 26; i++) {
    result.push(createObj(i));
  }
  return result;
};

get25Objects();
