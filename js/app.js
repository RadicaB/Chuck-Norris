import { getJoke } from './data.js';
import { renderJoke } from './ui.js';

const button = document.getElementById('button');
button.addEventListener('click', () => {
    getJoke().then(joke => {
      renderJoke(joke);
    });
  });