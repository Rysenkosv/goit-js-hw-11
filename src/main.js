import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchImages } from './js/pixabay-api';
import { renderGallery, showLoader, hideLoader, clearGallery } from './js/render-functions';

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const inputValue = form.elements['search-text'].value.trim();

  if (inputValue === '') {
    iziToast.warning({
      message: 'Введіть назву зображення!',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  fetchImages(inputValue)
    .then(images => {
      if (images.length === 0) {
        iziToast.info({
          message: 'Зображень не знайдено.',
          position: 'topRight',
        });
      } else {
        renderGallery(images);
      }
      form.reset();
    })
    .catch(error => {
      iziToast.error({
        message: 'Сталася помилка при запиті!',
        position: 'topRight',
      });
      console.error('Помилка:', error);
    })
    .finally(() => {
      hideLoader();
    });
}
