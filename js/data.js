export function getJoke() {
    return fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(data => data.value);
}
  