const jokeContainer = document.getElementById('main');

export function renderJoke(joke) {
  const jokeHTML = `<p>${joke}</p>`;
  jokeContainer.insertAdjacentHTML('afterend', jokeHTML);
}