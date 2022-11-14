import { getRandomDescription, getRandomPositiveInteger } from 'random.js';

export function createObj(id) {
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomDescription(),
    likes: getRandomPositiveInteger(15, 200),
    comments: getRandomPositiveInteger(0, 200),
  };
}

export function get25Objects() {
  const result = [];
  for (let i = 1; i < 26; i++) {
    result.push(createObj(i));
  }
  return result;
}

get25Objects();
