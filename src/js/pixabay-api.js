import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '50874397-c6e917ec67a94e5ad530eed0e';

export function fetchImages(query) {
  return axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
}