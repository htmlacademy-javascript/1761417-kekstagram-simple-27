export function getRandomDescription() {
  const nounDictionary = ['кот', 'погода', 'пейзаж', 'картинка', 'основа', 'функция', 'пользователь', 'массив', 'код', 'задание'];
  const verbDictionary = ['смотрит', 'дышит', 'спит', 'делается', 'выполняется', 'регистрируется', 'проверяется', 'получается', 'создается', 'пишется'];
  const randomNoun = nounDictionary[getRandomPositiveInteger(0, nounDictionary.length - 1)];
  const randomVerb = verbDictionary[getRandomPositiveInteger(0, verbDictionary.length - 1)];
  return `${randomNoun} ${randomVerb}`;
}

export function getRandomPositiveInteger(a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}
