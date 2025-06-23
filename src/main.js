import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './js/pixabay-api';
import { renderGallery, showLoader, hideLoader } from './js/render-functions';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

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
  showLoader();
  fetchImages(inputValue)
    .then(response => {
      const images = response.data.hits;

      if (images.length === 0) {
        gallery.innerHTML = '';
        iziToast.info({
          message: 'Зображень не знайдено.',
          position: 'topRight',
        });
      } else {
        console.log(images);
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