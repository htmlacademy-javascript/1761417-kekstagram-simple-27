import { get25Pictures } from './picture.js';

export function fillPictures() {
  const fragment = new DocumentFragment();
  const templatePicture = document.querySelector('#picture');
  const pictureData = get25Pictures();

  for (let i = 0; i < pictureData.length; i++) {
    const picture = pictureData[i];
    const clone = templatePicture.content.cloneNode(true);
    clone.querySelector('.picture__img').setAttribute('src', picture.url);
    clone.querySelector('.picture__img').setAttribute('alt', picture.description);
    clone.querySelector('.picture__likes').textContent = picture.likes;
    clone.querySelector('.picture__comments').textContent = picture.comments;

    fragment.append(clone);
  }

  document.querySelector('.pictures').append(fragment);
}
