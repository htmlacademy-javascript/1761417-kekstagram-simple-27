import { getRandomDescription, getRandomPositiveInteger } from './random.js';

export function createPicture(id) {
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomDescription(),
    likes: getRandomPositiveInteger(15, 200),
    comments: getRandomPositiveInteger(0, 200),
  };
}

export function get25Pictures() {
  const result = [];
  for (let i = 1; i < 26; i++) {
    result.push(createPicture(i));
  }
  return result;
}
